import { StaticImageData } from "next/image";

export interface LibraryCardProps {
  title: string;
  date: string;
  imgColor: string;
}

export interface RecentReleaseDataProps {
  date: string;
  title: string;
  description: string;
  country: string;
}

export interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
}
