import React from "react";

import { Column, Row, Img, Text, Input, Button } from "components";

const UserLoginPagePage = () => {
  return (
    <>
      <Column className="bg-bluegray_800_c6 font-inter justify-start mx-[auto] w-[100%]">
        <Row className="items-start w-[87%]">
          <Img
            src="images/img_ps11.png"
            className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[40%]"
            alt="PSEleven"
          />
          <Column className="items-center justify-start lg:ml-[141px] xl:ml-[176px] 2xl:ml-[198px] 3xl:ml-[238px] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[44%]">
            <Text
              className="italic text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Login Page
            </Text>
            <Column className="items-center justify-start lg:mt-[57px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Input
                className="placeholder:bg-bluegray_100 font-normal italic p-[0] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="w-[100%]"
                name="GroupThree"
                placeholder="Emailid"
              ></Input>
              <Input
                className="placeholder:bg-bluegray_100 font-normal italic p-[0] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] placeholder:text-black_900 text-black_900 w-[100%]"
                wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[16px] w-[100%] xl:mt-[20px]"
                name="password"
                placeholder="Password"
              ></Input>
              <Button className="font-bold xl:mt-[100px] 2xl:mt-[112px] 3xl:mt-[135px] lg:mt-[80px] lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-center w-[100%]">
                CONNECT
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default UserLoginPagePage;
