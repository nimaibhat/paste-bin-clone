import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useOrigin } from "../../hooks/useOrigin";
import { trpc } from "../../utils/trpc";

const SnippetPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const snippets = trpc.useQuery([
    "snippet.getSnippet",
    {
      id,
    },
  ]);

  const handleCopyToClipboard = () => {
    if (!snippets.data) return;
    navigator.clipboard.writeText(snippets.data.text);
  };

  const origin = useOrigin();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col justify-center">
        <h1 className="font-bold text-4xl">Viewing A Snippet</h1>
        <Link href={`/snippets/{id}`}>
                {`${origin}/snippets/${id}`}
        </Link>
        <textarea
          className="w-64 h-64"
          disabled
          value={snippets.data?.text}
        ></textarea>
        <button
          className="p-2 text-white rounded bg-blue-500 hover:bg-blue-400"
          onClick={handleCopyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>
    </>
  );
};

export default SnippetPage;
