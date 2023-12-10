import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { FaTimesCircle, FaBars, FaBook } from "react-icons/fa";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "What is Defi",
    href: "https://www.youtube.com/embed/SZXwDhcx9uY",
    description: "Decentralized finance for beginners",
    videoEmbedCode: "https://www.youtube.com/embed/SZXwDhcx9uY",
    imageUrl: "https://www.youtube.com/watch?v=SZXwDhcx9uY",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Defi Animated",
    href: "https://www.youtube.com/embed/SZXwDhcx9uY",
    description: "Decentralized finance for beginners",
    videoEmbedCode: "https://www.youtube.com/embed/SZXwDhcx9uY",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "How to make money with crypto",
    href: "https://www.youtube.com/embed/SZXwDhcx9uY",
    description: "Decentralized finance for beginners",
    videoEmbedCode: "https://www.youtube.com/embed/SZXwDhcx9uY",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Home() {
  const buttonStyles = {
    backgroundColor: "#92548B",
  };
  const [userAddress, setUserAddress] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
              </div>
              <h1 className="mt-24 text-4xl tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Learn and Earn in <br /> Defi on the go
              </h1>

              <div className="mt-10 flex flex-col gap-y-4">
                <div className="font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-20">
                  <Link href="/calculate">
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Calculate
                    </button>
                  </Link>
                </div>
                <div className="font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-20">
                  <button
                    style={buttonStyles}
                    type="button"
                    className="rounded-md relative inline-flex items-center gap-x-1.5 rounded-l-md px-3 py-2 text-md font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                  >
                    <FaBook
                      className="-ml-0.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    Invest
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/04c4ea61-b5d7-4a8f-b601-060a3fe0caa8"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Built on
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/0cc7e89e-3d9d-4138-adcf-91088b3e37aa"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/c650b101-78b9-46bb-8f04-812283eb3cd5"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/0a079776-99c1-4982-aa49-e3b49b4ccc82"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/72069661-8415-4fd0-b4e8-1bd4bac7badc"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://github.com/amoweolubusayo/hyperfi-shield/assets/20168921/16a81bf6-8e03-4aea-87d9-53b5eef176fd"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              New to DeFi?
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay in the know with some of our beginner courses.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <iframe
                  src={post.videoEmbedCode}
                  allow="autoplay; encrypted-media"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                ></iframe>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Use our calculator and aggregator
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mt-10">
            <div className="font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-20 mb-4">
              <Link href="/calculate">
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Calculator
                </button>
              </Link>
            </div>

            <div className="font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-20">
              <button
                style={buttonStyles}
                type="button"
                className="rounded-md relative inline-flex items-center gap-x-1.5 rounded-l-md px-3 py-2 text-md font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                Aggregator
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
