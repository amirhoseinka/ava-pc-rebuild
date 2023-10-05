import React from "react";
import Image from "next/image";
import Link from "next/link";

interface postsType{
    id:string,
    title:string,
    img:string
}

const posts : postsType[] = [
    {id:"1",title:"رفع و تعمیر بد سکتور هارد",img:"/pictures/avaplus/1.jpg"},
    {id:"2",title:"داستان شرکت a4tech",img:"/pictures/avaplus/2.jpg"},
    {id:"3",title:"شرکت ریزر و تاریخچه این کمپانی",img:"/pictures/avaplus/3.jpg"},
    {id:"4",title:"شرکن لاجیتک و تاریخچه این شرکت",img:"/pictures/avaplus/4.png"},
]

function AvaPlus() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto lg:grid-cols-4 container my-3 content-center">
        {posts.map((post)=>(
            <div
          className="relative overflow-hidden w-[250px] h-[250px] mx-auto my-auto"
          key={post.id}
        >
            <Link href={`/avaplus/${post.id}`}>
          <Image
            src={post.img}
            className="rounded"
            width={250}
            height={250}
            alt="firstPicture"
          />
          <div className="absolute bottom-16 rounded px-4 py-2 bg-gray-900/50 w-full">
            <p className="text-gray-200 font-bold">{post.title}</p>
          </div>
          </Link>
        </div>
        ))}

    </div>
  );
}

export default AvaPlus;
