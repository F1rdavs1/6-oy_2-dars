import React from "react";
import Button from "../CategoryButton/Button";
import Cupcake from "../../assets/images/Cupcake.svg";
import Pizza from "../../assets/images/pizza.svg"
import Kebab from "../../assets/images/kebab.svg"
import Salmon from "../../assets/images/salmon.svg"
import Doughnut from "../../assets/images/doughnut.svg"
import LeftIcon from "../../assets/images/left-icon.svg"
import RightIcon from "../../assets/images/right-icon.svg"

const Category = () => {
  const category = [
    {
      id: 1,
      img: Cupcake,
      title: "Cupcake",
      count: "22 Items",
      bg:"bg-[#F0FEEB]",
    },
    {
      id: 2,
      img: Pizza,
      title: "Pizza",
      count: "25 Items",
      bg: "#E4F2F4"
    },
    {
      id: 3,
      img: Kebab,
      title: "Kebab",
      count: "12 Items",
      bg: "#EAEEFA"
    },
    {
      id: 4,
      img: Salmon,
      title: "Salmon",
      count: "22 Items",
      bg: "#F9EEF3"
    },
    {
      id: 5,
      img: Doughnut,
      title: "Doughnut",
      count: "11 Items",
      bg: "#F3F7D9"
    }
  ];
  return (
    <>
      <section className="pt-[45px]">
        <div className="w-[1250px] mx-auto">
          <h2 className="font-medium text-[38px] leading-[50px]">
            Browser Our Category
          </h2>
          <h2 className="font-medium text-[38px] leading-[50px] text-[#8BAC3E] mb-[32px]">
            Receipt
          </h2>
          <ul className="flex justify-between">
            {category.map((item, index) => (
              <li style={{backgroundColor:item.bg}} id='category-box' className={`w-[230px] mb-[46px] py-[30px] bg-[#F0FEEB] text-center rounded-[10px]`} key={index}>
                <img className="mx-auto" src={item.img} alt="Cupcake" width={47} height={52}/>
                <h2 className="mt-[21px] mb-[4px] font-medium text-[16px] leading-[22px]">
                  {item.title}
                </h2>
                <p className="font-normal text-[14px] leading-[16px]">
                  {item.count}
                </p>
              </li>
            ))}
          </ul>
          <div className='flex items-center justify-end gap-[13px] mb-[52px]'>
            <Button btnStyle={'pl-[13px] py-[9px]'}> 
            <img src={LeftIcon} alt="LeftIcon" width={33} height={33} />
            <p className='font-medium leading-[19px] text-[16px]'>PREV</p>
            </Button>
            <Button btnStyle={'py-[8px] pr-[13px]'}> 
            <p className='font-medium leading-[19px] text-[16px]'>NEXT</p>
            <img src={RightIcon} alt="RightIcon" width={33} height={33} />
            </Button>
        </div>
        </div>
      </section>
    </>
  );
};

export default Category;
