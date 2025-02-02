import { Member, mapApiObjectToMember } from "./Member";
import { Branch, mapApiObjectToBranch } from "./Branch";
import { Commit, mapApiObjectToCommit } from "./Commit";
import { Issue, mapApiObjectToIssue } from "./Issue";
import { File, mapApiObjectToFile } from "./File";

export class Repository{
    id: string;
    name: string;
    owner: Member;
    isPrivate: boolean;
    description: string;
    isFork: boolean;
    url: string;
    branches: Branch[];
    commits: Commit[];
    contributors: Member[];
    issues: Issue[];
    files: File[];
    language: string;
    size: number;

    platform: string;
    status: string;

    constructor(
        id: string,
        name: string,
        owner: Member,
        isPrivate: boolean,
        description: string,
        isFork: boolean,
        url: string,
        branches: Branch[],
        commits: Commit[],
        contributors: Member[],
        issues: Issue[],
        files: File[],
        language: string,
        size: number,

        platform: string,
        status: string,
      ) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.isPrivate = isPrivate;
        this.description = description;
        this.isFork = isFork;
        this.url = url;
        this.branches = branches;
        this.commits = commits;
        this.contributors = contributors;
        this.issues = issues;
        this.files = files;
        this.language = language;
        this.size = size;

        this.platform = platform;
        this.status = status;
      }
}

// Fonction de mapping
export function mapApiObjectToRepository(apiObject: any): Repository {
  const owner = mapApiObjectToMember(apiObject.owner);
  const branches = apiObject.branches.map((branchData: any) => {
    return mapApiObjectToBranch(branchData);
  });
  const commits = apiObject.commits.map((commitData: any) => {
    return mapApiObjectToCommit(commitData);
  });
  const members = apiObject.contributors.map((memberData: any) => {
    return mapApiObjectToMember(memberData);
  });
  const issues = apiObject.issues.map((issueData: any) => {
    return mapApiObjectToIssue(issueData);
  });
  const files = apiObject.files.map((fileData: any) => {
    return mapApiObjectToFile(fileData);
  });

  return new Repository(
    apiObject.id.toString(),
    apiObject.name,
    owner,
    apiObject.isPrivate,
    apiObject.description || "",
    apiObject.isFork,
    apiObject.url,
    branches,
    commits,
    members,
    issues,
    files,
    apiObject.language,
    apiObject.size,
    "",
    "",
  );
}