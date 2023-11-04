import Image from "next/image";
import { Body, Heading } from "..";
import Link from "next/link";
import { CardType } from "@/types";

export default function Card({ icon, route, heading, body }: CardType) {
  return (
    <Link href={route}>
      <Image src={icon} alt="card icon" width={52} height={52} />
      <Heading type="h3" size="five" color="white">
        {heading}
      </Heading>
      {/* <Body weight="500" size="medium">
        {body}
      </Body> */}
    </Link>
  );
}
