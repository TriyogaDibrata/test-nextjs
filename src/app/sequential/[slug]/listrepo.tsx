async function getDataRepos(name: string) {
    const res = await fetch(`https://api.github.com/users/${name}/repos`);
    //buat timeout
    await new Promise((r) => setTimeout(r, 2000));
    return res.json();
  }
  
  const RepoList = async ({slug} : any) => {
    const dataRepos = await getDataRepos(slug);
    return (
      <>
        <p>List Repository</p>
        <div>{JSON.stringify(dataRepos)}</div>
      </>
    );
  };
  
  export default RepoList