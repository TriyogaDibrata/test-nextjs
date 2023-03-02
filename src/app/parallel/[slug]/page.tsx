//ini contoh server component / server side rendering component (SSR)
//ini adalah parallel fetching dimana request akan saling menunggu hingga selesai sampai data ditampilkan
import React from "react";

async function getDataUser(name: string) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  return res.json();
}

async function getDataRepos(name: string) {
  const res = await fetch(`https://api.github.com/users/${name}/repos`);
  //buat timeout
    await new Promise(r =>setTimeout(r, 2000));
  return res.json();
}

export default async function DetailParallel({
  params,
}: {
  params: { slug: string };
}) {
  //bisa seperti dibawah ini
  //   const dataPengguna = await getDataUser(params.slug);
  //   const dataRepos = await getDataRepos(params.slug);

  // atau seperti ini
  const dataPengguna = getDataUser(params.slug);
  const dataRepos = getDataRepos(params.slug);

  const [user, repos] = await Promise.all([dataPengguna, dataRepos]);

  return (
    <div>
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(user)}</div>
      <p>List Repository</p>
      <div>{JSON.stringify(repos)}</div>
    </div>
  );
}
