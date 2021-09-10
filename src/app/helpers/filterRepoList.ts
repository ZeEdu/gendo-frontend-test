import { Repo } from '../interfaces/repo';

function filterRepoList(repoList: Repo[], query: string) {
  if (query === '') {
    return [...repoList];
  } else {
    return repoList.filter((repo) => repo.full_name.includes(query));
  }
}

export default filterRepoList;
