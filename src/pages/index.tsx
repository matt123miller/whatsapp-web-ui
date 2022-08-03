import type { NextPage } from "next";
import Head from "next/head";
import { ChatListHeader, ChatWindowHeader, WideContainer } from "../components";

const Home: NextPage = () => {
  const allChats = [];

  return (
    <>
      <Head>
        <title>Cloning web.whatsapp.com</title>
        <meta
          name="description"
          content="Fun project to improve my front-end skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <div className="chats-panel h-screen bg-dark-grey border border-green-600">
          <WideContainer className="text-dead-white">
            <ChatListHeader />
          </WideContainer>
        </div>
        <div className="content-panel h-screen bg-midnight-black border border-blue-600">
          <WideContainer className="text-dead-white">
            <ChatWindowHeader />
            <div></div>
          </WideContainer>
        </div>
      </div>
    </>
  );
};

export default Home;
