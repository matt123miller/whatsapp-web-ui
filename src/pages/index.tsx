import type { NextPage } from "next";
import Head from "next/head";
import {
  ChatItem,
  ChatListHeader,
  ChatWindowHeader,
  WideContainer,
} from "../components";
import SearchBar from "../components/ChatList/SearchBar";

const Home: NextPage = () => {
  const allChats = [
    {
      title: "chattitle",
      imageSrc: "",
      lastUpdatedDate: new Date(),
      previewContent: "preview",
    },
    {
      title: "chattitle",
      imageSrc: "",
      lastUpdatedDate: new Date(),
      previewContent: "preview",
    },
    {
      title: "chattitle",
      imageSrc: "",
      lastUpdatedDate: new Date(),
      previewContent: "preview",
    },
    {
      title: "chattitle",
      imageSrc: "",
      lastUpdatedDate: new Date(),
      previewContent: "preview",
    },
    {
      title: "chattitle",
      imageSrc: "",
      lastUpdatedDate: new Date(),
      previewContent: "preview",
    },
  ];

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

      <div className="flex text-white">
        <div className="chats-panel h-screen bg-dark-grey border border-green-600">
          <div className="flex h-14 p-2 text-dead-white border-b border-b-white">
            <ChatListHeader />
          </div>
          <div className="flex h-10 border-b border-b-white bg-dark-grey">
            <SearchBar />
          </div>
          {/* Chat list */}
          {/* {allChats.map((chat, i) => {
            return <ChatItem key={i} chat={chat} />;
          })} */}
        </div>
        <div className="content-panel h-screen bg-midnight-black border border-blue-600">
          <div className="flex h-14 p-2 text-dead-white border-b border-b-white">
            <ChatWindowHeader />
          </div>
          <div className="flex ">chat content</div>
        </div>
      </div>
    </>
  );
};

export default Home;
