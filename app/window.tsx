import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen px-10 bg-gray-200 dark:bg-gray-700">
      {/* px는 x축으로 padding값이 나온다는 이야기다. dark라는 modifer는 컴퓨터 자체로 다크모드를 설정하면 같이 따라간다.
      sm:이라는 건 sm부터 더 큰 화면까지 적용된다는 뜻이다.*/}
      <div className="w-full max-w-screen-sm p-5 bg-blue-300 shadow-lg rounded-3xl dark:bg-gray-600">
        <div className="flex items-center justify-between">
          {/* justify-between은 양쪽에, items-center는 가운데에 배치 */}
          <div className="flex flex-col">
            <span className="-mb-1 font-semibold text-gray-600 dark:text-gray-300">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">Coolblue</span>
          </div>
          <div className="bg-orange-400 rounded-full size-12"></div>
        </div>
        <div className="flex items-center gap-2 my-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
            {/* transition를 통해 애니메이션을 자연스럽게 적용시킬 수 있음 */}
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>
        <div className="relative">
          {/* relative와 absolute가 만나면 포개어 진다 */}
          <div className="absolute w-full h-2 bg-gray-200 rounded-full"/>
          <div className="absolute w-2/3 h-2 bg-green-400 rounded-full "/>
        </div>
        <div className="flex items-center justify-between mt-5 text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
