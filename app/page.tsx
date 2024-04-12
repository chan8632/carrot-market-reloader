import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 h-screen flex items-center justify-center px-10">
      {/* px는 x축으로 padding값이 나온다는 이야기다. dark라는 modifer는 컴퓨터 자체로 다크모드를 설정하면 같이 따라간다.
      sm:은 최소크기~그 이후 큰화면에서 적용된다는 이야기다.*/}
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100 has-[:invalid]:ring">
        {/* has는 해당 컨테이너에서 해당클래스나 상태를 가지고 있는지 검사할 수 있다. */}
        <input
          className="w-full bg-gray-200 h-12 rounded-full pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer" 
          type="text"
          required
          placeholder="Email address..."
        />
        {/* invalid: 는 유효성을 검사하는 modifier로 조건이 맞지않으면 발생한다. 예:required를 했는데 안 적혀있다면 발동함. 
        modifier는 쌓을 수 있다. invalid:focus:의 경우는 invalid이고 focus이면 발동*/}
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90  transition-transform font-medium md:px-10 ">
          Log in
        </button>
        {/* bg-black에 마우스를 올려보면 rgb를 opacity로 나눈 값인 클래스이다. 이처럼 변수를 지정하거나 사용하는 class 타입도 존재한다. 
        bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400는 그라데이션이다
        peer를 적어둔 곳이랑 연동해서 'peer-invalid:bg-red-100' 경우에는 peer가 유효하지 않으면 발동*/}
      </div>
    </main>
  );
}

// ===========group------------------------------------------------
// {["Nico", "Me", "You", "Yourself"].map((person, index) => (
//   <div key={index} className="flex items-center group gap-5">
//     {/* last:border-0 first: 이것은 배열의 첫번째/마지막에 영향을 주는 것이다. */}
//     <div className="size-10 bg-blue-400 rounded-full" />
//     <span className="text-lg font-medium group-hover:bg-red-500">{person}</span>
//     {/* items-center는 아이템들을 수직 방향으로 가운데로 정렬하고, justify-center는 아이템들을 수평 방향으로 가운데로 정렬합니다 !group-hover:bg-red-500!---> 이건 group으로 묶인 애들 중 하나를 쓸 수 있는 것이다. group-focus-within은 */}
//     <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
//       <span className="z-10">{index}</span>
//       <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
//     </div>
//     {/* 원 두개를 놓고 해야 제대로된 animate-ping이 나온다. modifier중에 비어있을 때의 경우인 empty modifier도 있다.*/}
//   </div>
// ))}