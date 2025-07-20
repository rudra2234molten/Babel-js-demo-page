import React from "react";
let footerArray1 = [
  "Videos",
  "User Showcase",
  "Stack Overflow",
  "Slack Channel",
  "X(Twitter)",
  "Bluesky",
];
let footerArray2 = [
  "Blog",
  "GitHub Org",
  "GitHub Repo",
  "Website Repo",
  "Old 6.x Site",
  "Old 5.x Site",
];

function Footer() {
  return (
    <section className="bg-[#20232a] w-full h-[43vh]">
      <div className="flex h-50 w-[65%] m-auto gap-50 items-baseline pt-10">
        <div className="flex gap-10">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg"
            alt=""
            className="h-6 opacity-40 hover:opacity-100 cursor-pointer"
          />
          <ul>
            <li className="text-white font-bold">Docs</li>
            <li className="text-[#a5a3a2] hover:text-white pt-2 cursor-pointer">Learn ES2015</li>
          </ul>
        </div>
        <ul>
          <li className="text-white font-bold">Community</li>
          {footerArray1.map((list) => (
            <li className="text-[#a5a3a2] pt-2 cursor-pointer hover:text-white">{list}</li>
          ))}
        </ul>
        <ul>
          <li className="text-white font-bold">More</li>
          {footerArray2.map((list) => (
            <li className="text-[#a5a3a2] pt-2 cursor-pointer hover:text-white">{list}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Footer;
