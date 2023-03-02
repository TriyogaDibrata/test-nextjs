//ini contoh server component / server side rendering component (SSR)
//ini adalah sequential fetching dimana request tidak akan saling menunggu dan menampilkan request data yang selesai lebih cepat
import React, { Suspense } from "react";
import RepoList from "./listrepo";

async function getDataUser(name: string) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  return res.json();
}

export default async function DetailParallel({
  params,
}: {
  params: { slug: string };
}) {
  const dataPengguna = await getDataUser(params.slug);

  return (
    <div >
      <p>Detail User : {params.slug}</p>
      <div>{JSON.stringify(dataPengguna)}</div>
      
      <Suspense fallback={<div style={{marginTop:"12px"}}>Menunggu data repository...</div>}>
        {/* @ts-ignore */}
        <RepoList slug={params.slug}/>
      </Suspense>
    </div>
  );
}
