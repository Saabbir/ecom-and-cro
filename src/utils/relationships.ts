import { getCollection, type CollectionEntry } from 'astro:content';

export type KnowledgeEntry = CollectionEntry<'knowledge'>;

export interface ResolvedRelationships {
  relatedEntries: KnowledgeEntry[];
  confusedWithEntries: KnowledgeEntry[];
  shopifyEntry: KnowledgeEntry | null;
  comparisonEntries: KnowledgeEntry[];
}

/**
 * Resolves direct slug links and inverse references for a given knowledge entry.
 */
export async function getResolvedRelationships(currentEntry: KnowledgeEntry): Promise<ResolvedRelationships> {
  const allEntries = await getCollection('knowledge', (entry) => !entry.data.draft);
  const currentSlug = currentEntry.slug;

  const relatedMap = new Map<string, KnowledgeEntry>();
  const confusedWithMap = new Map<string, KnowledgeEntry>();
  const comparisonMap = new Map<string, KnowledgeEntry>();
  let shopifyEntry: KnowledgeEntry | null = null;

  // Direct related slugs
  for (const slug of currentEntry.data.relatedSlugs || []) {
    const found = allEntries.find((e) => e.slug === slug);
    if (found) relatedMap.set(found.slug, found);
  }

  // Direct confused with slugs
  for (const slug of currentEntry.data.confusedWithSlugs || []) {
    const found = allEntries.find((e) => e.slug === slug);
    if (found) confusedWithMap.set(found.slug, found);
  }

  // Direct shopify mapping
  if (currentEntry.data.shopifySlug) {
    const found = allEntries.find((e) => e.slug === currentEntry.data.shopifySlug);
    if (found) shopifyEntry = found;
  }

  // Inverse lookup across entries
  for (const entry of allEntries) {
    if (entry.slug === currentSlug) continue;

    if (entry.data.relatedSlugs?.includes(currentSlug)) {
      relatedMap.set(entry.slug, entry);
    }

    if (entry.data.confusedWithSlugs?.includes(currentSlug)) {
      confusedWithMap.set(entry.slug, entry);
    }

    if (entry.data.type === 'shopify' && entry.data.relatedSlugs?.includes(currentSlug) && !shopifyEntry) {
      shopifyEntry = entry;
    }

    if (entry.data.type === 'comparison') {
      if (entry.data.relatedSlugs?.includes(currentSlug) || entry.data.confusedWithSlugs?.includes(currentSlug)) {
        comparisonMap.set(entry.slug, entry);
      }
    }
  }

  return {
    relatedEntries: Array.from(relatedMap.values()),
    confusedWithEntries: Array.from(confusedWithMap.values()),
    shopifyEntry,
    comparisonEntries: Array.from(comparisonMap.values())
  };
}

/**
 * Returns canonical short URL path for a given entry.
 */
export function getEntryUrl(entry: KnowledgeEntry): string {
  const { category, type } = entry.data;
  const slug = entry.slug;

  if (type === 'comparison') return `/compare/${slug}/`;
  if (category === 'shopify' || type === 'shopify') return `/shopify/${slug}/`;
  if (category === 'metrics' || type === 'metric') return `/metrics/${slug}/`;
  if (category === 'cro' || type === 'cro') return `/cro/${slug}/`;
  return `/ecommerce/${slug}/`;
}
