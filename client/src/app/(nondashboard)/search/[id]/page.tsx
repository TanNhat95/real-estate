"use client";

import React, { useState } from "react";
import ImagePreviews from "./ImagePreviews";

const SingleListing = () => {
  return (
    <div>
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />
    </div>
  );
};

export default SingleListing;
