import { getCollection } from 'astro:content';
import { getEntryUrl } from '../../utils/relationships';

export async function GET() {
  const entries = await getCollection('knowledge', (entry) => !entry.data.draft);

  const searchData = entries.map((entry) => ({
    title: entry.data.title,
    slug: entry.slug,
    url: getEntryUrl(entry),
    summary: entry.data.summary,
    category: entry.data.category,
    type: entry.data.type,
    tags: entry.data.tags || []
  }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
