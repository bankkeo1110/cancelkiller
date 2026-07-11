// Attribution for public-domain / freely-licensed photos in /public/images.
// Photos are displayed in grayscale to match the Modernist design system.
export type ImageCredit = {
  author: string;
  license: string;
  source: string;
};

export const imageCredits: Record<string, ImageCredit> = {
  "vegetables-fruit.jpg": {
    author: "Kolforn / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:20-11-2009,_Fresh_fruit_and_Vegtable_stall,_municipal_market,_Olh%C3%A3o_(1).JPG",
  },
  "no-smoking.jpg": {
    author: "Tomasz Sienicki / Wikimedia Commons",
    license: "CC BY 2.5",
    source: "https://commons.wikimedia.org/wiki/File:Cigarette_in_white_ashtray.jpg",
  },
  "vaccination.jpg": {
    author: "U.S. Navy",
    license: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:US_Navy_050518-N-1485H-006_Hospitalman_Jessica_Mayer_of_Mariss,_Ill.,_preps_a_syringe_filled_with_measles,_mumps_and_rubella_vaccination_before_injecting_a_local_woman_the_local_village_of_Potts_Dam.jpg",
  },
  "healthy-meal.jpg": {
    author: "HaJunkiyada / Wikimedia Commons",
    license: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Home_cooked_healthy_meal.jpg",
  },
  "chest-xray.jpg": {
    author: "Mikael Häggström",
    license: "CC0",
    source:
      "https://commons.wikimedia.org/wiki/File:Chest_radiograph_of_a_lung_with_Kerley_B_lines.jpg",
  },
  "vaccine-vials.jpg": {
    author: "Ümit Kartoğlu / VOA",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:BioFarma_vaccine_vials_Bandung.jpg",
  },
  "jogging.jpg": {
    author: "Peter van der Sluijs / Wikimedia Commons",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Joggen_in_Spijkenisse.JPG",
  },
  "doctor-consult.jpg": {
    author: "National Cancer Institute (NCI)",
    license: "Public domain",
    source: "https://commons.wikimedia.org/wiki/File:Doctor_examines_patient.jpg",
  },
};
