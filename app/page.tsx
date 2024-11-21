import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <h1 className="text-center text-[28px]">
      Portfolio | Oleg Aleshin
    </h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem, nostrum dolorem deleniti molestias tempore laboriosam totam. Debitis dignissimos enim, sequi voluptas nesciunt ullam mollitia ipsa. Voluptatibus beatae ullam explicabo.</p>

    <Image src="/pic.png" alt="cv" height={500} width={450}/>
      <h3 className="ml-20">Способ связи:</h3>

          <Link href="tel:+79817625457">+79817625457</Link> <br />
          <Link href="/">ссылка на сайт</Link>
    <div className="flex ">
      <Image src="/title.jpg" alt="cv" height={500} width={450}/>
      <h3 className="fonr-bold text-[30px] mt-10 ml-36">я тут учусь!!</h3>
    </div>
   
  </div>    
)}