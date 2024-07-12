import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchRepositories,
  fetchRepositoryReadme,
  fetchRepositoryUI,
} from "../../services/githubService";
import styles from "./Portfolio.module.scss";
import Loading from "../Loading/Loading";
import placeholder from "../../assets/placeholder.png";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  readme?: string;
  uiImage?: string;
}

const Portfolio = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedRepo, setSelectedRepo] = useState<number>(0);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        const data = await fetchRepositories();
        const repoData = data.filter((repo: { name: string }) => !repo.name.includes("Abbby3"));
        const moreData = repoData.map(async (repo: Repository) => {
          const readme = await fetchRepositoryReadme(repo.name);
          const uiImage = await fetchRepositoryUI(repo.name);
          console.log(uiImage);
          repo.name = repo.name
            .replace("-", " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          return { ...repo, readme, uiImage };
        });
        const moreRepo = await Promise.all(moreData);
        setRepositories(moreRepo);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Unknown Error");
      } finally {
        setLoading(false);
      }
    };
    getRepositories();
  }, []);

  return (
    <>
      {loading && repositories ? (
        <Loading />
      ) : (
        <ul className={styles.portfolio} onClick={() => setSelectedRepo(0)}>
          {repositories.map((repo) => (
            <li
              key={repo.id}
              onClick={(e) => {
                repo.readme && setSelectedRepo(repo.id);
                e.stopPropagation();
              }}
              className={
                selectedRepo == repo.id ? styles.selected : repo.readme ? styles.hoverable : ""
              }
            >
              <div className={styles.shortDesc}>
                <div className={styles.text}>
                  <h1>{repo.name}</h1>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    Github Link
                  </a>
                  <p>{repo.description}</p>
                </div>
                {selectedRepo == repo.id && (
                  <img
                    className={styles.ui}
                    src={repo.uiImage || placeholder}
                    alt={`${repo.name} UI` || ""}
                  />
                )}
              </div>
              {selectedRepo == repo.id && repo.readme && (
                <pre className={styles.readme}>{repo.readme}</pre>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Portfolio;
