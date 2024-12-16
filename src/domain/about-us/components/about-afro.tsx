import React from "react";

export default function AboutAfro() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="container mx-auto p-3">
        <div className="text-center">
          <p className="text-[#67e8bc] text-3xl font-bold">
            EMPOWERING AFRICA'S FUTURE
          </p>
        </div>

        <div className="w-full  justify-between items-start lg:gap-20 mt-10">
          <p className="text-white text-2xl w-full lg:w-1/2 flex flex-col items-start gap-2">
            <p className="text-[#67e8bc]">Afro AI</p>

            <span className="text-justify">
              In the heart of Africa's digital renaissance, Afro AI was born
              from a simple yet powerful vision: to make advanced artificial
              intelligence accessible to every African mind eager to learn and
              grow. We are a passionate collective of AI enthusiasts who believe
              that the future of Africa lies in democratizing access to
              cutting-edge technology.
            </span>
          </p>
        </div>
        <div className="w-full flex justify-end items-start lg:gap-20 mt-10 text-right p-6 text-white">
          <div className=" text-2xl w-full lg:w-1/2 flex flex-col items-start gap-2 ">
            <p className="text-[#67e8bc]">Our Story</p>
            <p className="text-justify text-white">
              The journey began when we noticed a significant gap: while premium
              AI models were revolutionizing education and productivity
              worldwide, many Africans were left behind due to payment barriers
              and currency restrictions. We asked ourselves: "What if we could
              bridge this gap? What if we could make these powerful tools
              accessible to every student, professional, and innovator across
              Africa?"
            </p>
          </div>
        </div>
        <div className="w-full  justify-between items-start lg:gap-20 mt-10">
          <p className="text-white text-2xl w-full lg:w-1/2 flex flex-col items-start gap-2">
            <p className="text-[#67e8bc]">Our Mission</p>

            <span className="text-justify">
              Guided by the spirit of Ubuntu – "I am because we are" – our
              mission is to unlock the transformative power of premium AI tools
              for African learners(students) and professionals. We believe that
              when one African rises, we all rise together. By making advanced
              AI accessible in local currencies and at affordable rates, we're
              not just providing a service; we're nurturing a movement of
              digital empowerment across the continent.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
