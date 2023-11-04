"use client";
import { useState } from "react";
import { Body, Card, Flex, Heading, Search } from "@/components";
import { CardType } from "@/types";

type ConstantsType = {
  heading: string;
  body: string;
  placeholder: string;
  cards: CardType[];
};

const constants: ConstantsType = {
  heading: "Help Center",
  body: " What can we help you with?",
  placeholder: "Search what you need",
  cards: [
    {
      icon: "/assets/question.svg",
      heading: "Get Started",
      body: "Discover Unpixel Company",
      route: "/help-center/get-started",
    },
    {
      icon: "/assets/",
      heading: "FAQ",
      body: "Frequently Asked Questions",
      route: "/help-center/frequently-asked-questions",
    },
  ],
};

export default function HelpCenter() {
  const [search, setSearch] = useState("");
  return (
    <Flex direction="column" gap="23px" alignItems="flex-start">
      <>
        <Flex gap="20px" justify="space-between" fullWidth>
          <>
            <Flex direction="column" gap="8px" alignItems="flex-start">
              <>
                <Heading type="h1" size="four" color="white">
                  {constants.heading}
                </Heading>
                <Body size="medium" type="p" weight="500" color="greyscale-600">
                  {constants.body}
                </Body>
              </>
            </Flex>

            <Search
              placeholder={constants.placeholder}
              value={search}
              setValue={setSearch}
            />
          </>
        </Flex>

        <div>
          {constants.cards.map((card) => (
            <Card
              body={card.body}
              heading={card.heading}
              route={card.route}
              icon={card.icon}
            />
          ))}
        </div>
      </>
    </Flex>
  );
}
