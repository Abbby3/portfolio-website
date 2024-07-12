const userUrl = `https://api.github.com/users/Abbby3/repos`;
const repoUrl = `https://api.github.com/repos/Abbby3/`;
const token = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
  Accept: "application/vnd.github.v3.raw",
  ...(token && { Authorization: `Bearer ${token}` }),
};

export const fetchRepositories = async () => {
  const response = await fetch(userUrl, { headers });
  if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to fetch repositories.`);
  }
  return await response.json();
};

export const fetchRepositoryReadme = async (repoName: string) => {
  const response = await fetch(`${repoUrl}${repoName}/readme`, { headers });
  if (response.status === 404) {
    console.warn(`Error ${response.status}. README not found for ${repoName}`);
  } else if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to fetch README for ${repoName}`);
  }
  return await response.text();
};

export const fetchRepositoryUI = async (repoName: string) => {
  const response = await fetch(`${repoUrl}${repoName}/contents/UI.png`, { headers });
  if (response.status === 404) {
    console.warn(`Error ${response.status}. UI.png not found for ${repoName}`);
  } else if (!response.ok) {
    throw new Error(`Error ${response.status}. Failed to fetch UI.png for ${repoName}`);
  }
  const data = await response.json();
  return data.download_url;
};
