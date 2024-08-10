// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      { title: "Project Structure", href: "/project-structure" },
      { title: "Changelog", href: "/changelog" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  // {
  //   title: "Server Actions",
  //   href: "server-actions",
  //   items: [
  //     { title: "getSession", href: "/getSession" },
  //     { title: "getToken", href: "/getToken" },
  //     { title: "getRole", href: "/getRole" },
  //   ],
  // },
  {
    title: "Methods",
    href: "methods",
    items: [
      { title: "Leave", href: "/leave" },
      { title: "Cancer", href: "/cancer" },
      { title: "Welcome", href: "/welcome" },
      { title: "Byemom", href: "/byemom" },
      { title: "Delete", href: "/delete" },
      { title: "Corporate", href: "/corporate" },
      { title: "Dab", href: "/dab" },
      { title: "Egg", href: "/egg" },
      { title: "Emergency Meeting", href: "/emergencymeeting" },
      { title: "Cry", href: "/cry" },
      { title: "Draw25", href: "/draw25" },
      { title: "Brazzers", href: "/brazzers" },
      { title: "Changemymind", href: "/changemymind" },
      { title: "Disability", href: "/disability" },
      { title: "Abandon", href: "/abandon" },
      { title: "Door", href: "/door" },
      { title: "Floor", href: "/floor" },
      { title: "Drake", href: "/drake" },
      { title: "Hitler", href: "/hitler" },
      { title: "Humans Good", href: "/humansgood" },
      { title: "Excuse Me", href: "/excuseme" },
      { title: "Ipad", href: "/ipad" },
      { title: "Jail", href: "/jail" },
      { title: "God Why", href: "/godwhy" },
      { title: "Communism", href: "/communism" },
      { title: "Not Stonks", href: "/notstonks" },
      { title: "Note", href: "/note" },
      { title: "Affect", href: "/affect" },
      { title: "Obama", href: "/obama" },
      { title: "Ohno", href: "/ohno" },
      { title: "Pepesign", href: "/pepesign" },
      { title: "Kiss", href: "/kiss" },
      { title: "Fake News", href: "/fakenews" },
      { title: "Roblox", href: "/roblox" },
      { title: "Keep Distance", href: "/keepdistance" },
      { title: "Laid", href: "/laid" },
      { title: "Satan", href: "/satan" },
      { title: "Stonks", href: "/stonks" },
      { title: "Shit", href: "/shit" },
      { title: "Tornado", href: "/tornado" },
      { title: "Piccolo", href: "/piccolo" },
      { title: "America", href: "/america" },
      { title: "Save Humanity", href: "/savehumanity" },
      { title: "Search", href: "/search" },
      { title: "VR", href: "/vr" },
      { title: "Tweet", href: "/tweet" },
      { title: "Wanted", href: "/wanted" },
      { title: "Whodidthis", href: "/whodidthis" },
      { title: "Youtube", href: "/youtube" },
      { title: "Ugly", href: "/ugly" },
      { title: "Anime Quotes", href: "/animequotes" },
      { title: "Walking", href: "/walking" },
      { title: "Failure", href: "/failure" },
      { title: "Stroke", href: "/stroke" },
      { title: "Trash", href: "/trash" },
      { title: "Aborted", href: "/aborted" },
      { title: "Violence", href: "/violence" },
      { title: "Facts", href: "/facts" },
      { title: "Armor", href: "/armor" },
      { title: "Bed", href: "/bed" },
      { title: "Bongocat", href: "/bongocat" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
