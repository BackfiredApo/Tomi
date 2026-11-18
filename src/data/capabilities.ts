export interface Capability {
  id: string;
  title: string;
  href: string;
  summary: string;
  image: string;
  imageAlt: string;
  introduction: string;
  scope: { title: string; text: string }[];
  brief: string[];
  catalogues?: { title: string; href: string; description: string }[];
}

export const CAPABILITIES = {
  cnc: {
    id: "cnc",
    title: "CNC Machining",
    href: "/cnc-machining",
    summary: "Custom parts, fixtures and assemblies made to drawing.",
    image: "/images/ranges/cnc.webp",
    imageAlt: "Illustration of a machined flange, steel shaft and metal bracket",
    introduction: "Custom parts and production fixtures. We review your drawings and tolerances before quoting.",
    scope: [
      { title: "Machining", text: "3- and 4-axis milling and CNC turning for brackets, housings, plates and shafts." },
      { title: "Tooling and fixtures", text: "Fixtures and carriers for automation, optical and display manufacturing." },
      { title: "Finish and inspection", text: "Aluminium, steel and stainless steel, with surface treatments and CMM inspection where applicable." },
    ],
    brief: ["PDF drawing and STEP file, if available", "Material grade, finish and critical tolerances", "Quantity per part and required delivery date"],
    catalogues: [
      { title: "CNC capabilities and project examples", href: "/catalogues/tomi-cnc-capabilities.pdf", description: "Processes, equipment and sample parts." },
    ],
  },
  apparel: {
    id: "apparel",
    title: "Apparel Manufacturing",
    href: "/apparel-manufacturing",
    summary: "T-shirts, hoodies, work trousers, denim, womenswear and kidswear.",
    image: "/images/ranges/apparel.webp",
    imageAlt: "Illustration of a T-shirt, hoodie, work trousers and a children’s set",
    introduction: "Custom apparel from your tech pack, reference sample or a catalogue style.",
    scope: [
      { title: "T-shirts and polos", text: "Short-sleeve tees, long-sleeve tops, polos and blanks." },
      { title: "Sweatshirts and hoodies", text: "Crewnecks, pullovers, zip-ups and matching joggers." },
      { title: "Work trousers and denim", text: "Cargo and work trousers, jeans and denim jackets. Specify pockets, wash or reinforcement." },
      { title: "Womenswear", text: "Tops, dresses, coordinated sets and selected activewear." },
      { title: "Kidswear", text: "Tops, sweatshirts, joggers, sets and dresses." },
      { title: "Sampling and private label", text: "Confirm fabric, fit, trims, labels and packing before bulk production." },
    ],
    brief: ["Tech pack, reference photo or catalogue style", "Fabric composition, weight and size range", "Colours, quantities and destination requirements"],
    catalogues: [
      { title: "Womenswear catalogue", href: "/catalogues/tomi-womenswear.pdf", description: "Tops, dresses, sets, denim and activewear." },
      { title: "Kidswear catalogue", href: "/catalogues/tomi-kidswear.pdf", description: "Sets, separates and dresses." },
      { title: "Denim & streetwear catalogue", href: "/catalogues/tomi-denim-streetwear.pdf", description: "Jeans, jackets and casual streetwear." },
    ],
  },
  pets: {
    id: "pets",
    title: "Pet Toys",
    href: "/pet-toys",
    summary: "EVA and ETPU dog toys for training and fetch.",
    image: "/images/ranges/pet-toys.webp",
    imageAlt: "Illustration of a dog rope ball, pull ring and flying disc",
    introduction: "EVA and ETPU toys for training and interactive play. Specifications vary by model.",
    scope: [
      { title: "Balls and rope balls", text: "Training balls, hollow balls and rope balls in selected sizes and colours." },
      { title: "Rings and discs", text: "Pull rings and flying discs." },
      { title: "Product documentation", text: "Available material, test and packing information varies by model and market." },
    ],
    brief: ["Catalogue page or product reference", "Preferred size, colour, quantity and packaging", "Destination market and any required test documents"],
    catalogues: [
      { title: "Pet toys catalogue", href: "/catalogues/tomi-pet-toys.pdf", description: "Model photos and specifications." },
    ],
  },
  cables: {
    id: "cables",
    title: "Network & USB Cables",
    href: "/cables",
    summary: "RJ45 patch cords, USB charging and data cables.",
    image: "/images/ranges/cables.webp",
    imageAlt: "Illustration of RJ45 Ethernet and USB-C cable connectors",
    introduction: "RJ45 patch cords and USB cables to your specification. We confirm construction, testing and pricing by variant.",
    scope: [
      { title: "Network patch cords", text: "Specify category, shielding, conductor, jacket and length." },
      { title: "USB cables", text: "USB-A, USB-C and Micro-USB for charging or data." },
      { title: "Testing and packing", text: "Specify test reports, markings, labels and retail or bulk packing." },
    ],
    brief: ["Connector type or network category and shielding", "Length and quantity for each variant", "Required rating, jacket, test method or destination-market documents"],
  },
  ppf: {
    id: "ppf",
    title: "PPF & TPU Films",
    href: "/automotive-films",
    summary: "Paint protection and TPU colour-change films.",
    image: "/images/ranges/films.webp",
    imageAlt: "Illustration of clear, matte grey and sage automotive film rolls",
    introduction: "Automotive film for distributors and installers. Specifications and available documents vary by film.",
    scope: [
      { title: "Paint protection film", text: "Clear and matte options." },
      { title: "TPU colour-change film", text: "Specify colour, finish and roll size for installation or resale." },
      { title: "Sample evaluation", text: "Review samples, roll cores, private-label packing and available documents." },
    ],
    brief: ["Application, colour and finish", "Roll dimensions and estimated quantity", "Target market and any test or packaging requirements"],
  },
} satisfies Record<string, Capability>;

export const PRODUCT_RANGES: Capability[] = Object.values(CAPABILITIES);

export function inquiryHref(id?: string) {
  return id ? `/contact/?category=${encodeURIComponent(id)}#rfq` : "/contact/#rfq";
}
