"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {v4 as uuidv4} from "uuid"

interface IProps {
  projectId: string;
  images: string[];
}

const ProjectCarousel =  ({ projectId, images }: IProps) => {
  console.log(projectId, images);
  const constructedURLList = images.map(
    (image) => `${process.env.NEXT_PUBLIC_CDN_PROJECT}/${projectId}/${image}`
  );

  return (
    <Carousel autoPlay>
        {constructedURLList.map((item) => (
          <div key={uuidv4()}>
            <img width={100} height={100}className="carousel-slide" alt="" src={item} />
          </div>
        ))}
    </Carousel>
  );
};
export default ProjectCarousel;
