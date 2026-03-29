export interface GitHubContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

/**
 * Fetches contributors from the GitHub API at build time.
 * Results are cached during the build — this only makes one API call.
 */
export async function getContributors(): Promise<GitHubContributor[]> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/h4harsimran/vibe-coders-handbook/contributors?per_page=100',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Optional: set GITHUB_TOKEN env var to avoid rate limits
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
