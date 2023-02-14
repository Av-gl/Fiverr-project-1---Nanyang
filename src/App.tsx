// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useMediaQuery } from '@mantine/hooks';
import HeaderNav from './components/headerNav';
import DrawerNav from './components/drawerNav';
import hero from './images/Hero.jpeg'
import laserMarking from './images/laserMarking.jpg'
import laserEngraving from './images/laserEngraving.jpg'
import laserEtching from './images/laserEtching.jpg'
import handshake from './images/handshake.jpg'
import Slide1 from './images/Slide 1.jpg'
import Slide2 from './images/Slide 2.jpg'
import Slide3 from './images/Slide 3.jpg'
import Slide4 from './images/Slide 4.jpg'
import Slide5 from './images/Slide 5.jpeg'
import { Anchor, Center, createStyles, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const App = () => {
  const matches = useMediaQuery('(min-width: 850px)');
  const matches2 = useMediaQuery('(min-width: 680px)');
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  const [height2, setHeight2] = useState(0)
  const ref2 = useRef(null)
  const [height3, setHeight3] = useState(0)
  const ref3 = useRef(null)
  const [height4, setHeight4] = useState(0)
  const ref4 = useRef(null)

  useEffect(() => {
    //@ts-ignore
    setHeight(ref.current.clientHeight)
    //@ts-ignore
    setHeight2(ref2.current.clientHeight)
    //@ts-ignore
    setHeight3(ref3.current.clientHeight)
    //@ts-ignore
    setHeight4(ref4.current.clientHeight)
  })


  const useStyles = createStyles({
    headingTitle: {
      fontSize: "15vw",
      fontFamily: `Quicksand, sans-serif`,
      '@media (max-width: 600px)': {
        fontSize: "17vw"
      },
    },
    headingSubTitle: {
      fontSize: "4vw",
      fontFamily: `Quicksand, sans-serif`,
      '@media (max-width: 600px)': {
        fontSize: "5vw"
      },
    }, subTitleContent: {
      fontSize: "1.1vw",
      '@media (max-width: 1100px)': {
        fontSize: "1.7vw"
      },
      '@media (max-width: 660px)': {
        fontSize: "2.7vw"
      },
      '@media (max-width: 420px)': {
        fontSize: "3.7vw"
      },
    },
    subTitle: {
      fontSize: "6vw",
      '@media (max-width: 400px)': {
        fontSize: "8vw"
      },
    },
  })

  const { classes } = useStyles();

  return (
    <>

      {/*
      Matches 2 is used to differentiate between the desktop and phone design. The first set of code (after ? and before :) is used for displaying on larger screens.
      The second set of code (after :) is used for displayed on smaller screens.
      
      In order to change or add more images, upload the relevent images in the images folder in src. On top of this file, import the image as done previously. The component
      used for displaying multiple images is known as Carousel. A Carousel slide is used for adding more images. In src, enter the name of the image. Do not change
      the height attrinute as it will cause bugs to appear. 

      Meta tags, the title, the favicon can be found in the public folder. The index.html consists of further details. 

      */}
      {matches ? <HeaderNav /> : <DrawerNav />}
      {matches2 ? <>
        <div style={{ height: `calc(100vh - 80px)`, backgroundImage: `url(${hero})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
          <Center style={{ height: "100%" }}>
            <Stack style={{ margin: "0px 0px 0px 20px" }}>
              <Title style={{ color: "white" }} className={classes.headingTitle}>SIGNAGES</Title>
              <Text style={{ color: "white" }} className={classes.headingSubTitle}><b>Let our quality speak for your business.</b></Text>
            </Stack>
          </Center>
        </div>
        <Text style={{ backgroundColor: "#31302f", color: "#f8eee1" }} align="center">SOMETHING AMAZING IS ABOUT TO HAPPEN</Text>
        <section id='LaserMarking' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
          <Grid style={{ margin: "0px", padding: "30px" }}>
            <Grid.Col span={6}>
              <Stack ref={ref}>
                <Title style={{ color: "black" }} className={classes.subTitle}>Laser Marking</Title>
                <Text className={classes.subTitleContent} style={{ color: "black", marginRight: "50px" }}>Laser marking is a process of permanently marking or engraving a material by directing the output of a high-powered laser beam onto its surface. The laser beam removes material from the surface, creating a contrast or a permanent mark that can take the form of text, logos, barcodes, serial numbers, or graphics.
                  Laser marking is a versatile method of marking as it can be used on a wide range of materials, including metals, plastics, ceramics, and glass. It is a non-contact method, meaning that it does not physically touch the surface being marked, which makes it suitable for delicate or heat-sensitive materials.
                  There are several types of laser marking, including engraving, annealing, foaming, and ablation. Each type of laser marking uses a specific laser and marking process to produce a specific type of mark.
                  Laser marking offers several benefits over traditional marking methods, such as being more durable, precise, and legible.</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Carousel
                slideGap="md"
                dragFree
                loop
                breakpoints={[
                  { maxWidth: 'md', slideSize: '50%' },
                  { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                align="start"
              >
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height} src={Slide1} alt="Dates engraved using a laser." caption="Dates engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height} src={Slide2} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height} src={Slide3} alt="'Normally Open' engraved using a laser." caption="'Normally Open' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height} src={Slide4} alt="'Water PI' engraved using a laser." caption="'Water PI' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height} src={Slide5} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                {/* ...other slides */}
              </Carousel>
            </Grid.Col>
          </Grid>
        </section>
        <section style={{ padding: "30px" }}>
          <Carousel
            slideSize="auto"
            slideGap="md"
            dragFree
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
            align="start"
          >
            <Carousel.Slide style={{ margin: "5px" }}>
              <Image fit="contain" radius="md" height={300} src={Slide1} alt="Dates engraved using a laser." caption="Dates engraved using a laser." />
            </Carousel.Slide>
            <Carousel.Slide style={{ margin: "5px" }}>
              <Image fit="contain" radius="md" height={300} src={Slide2} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
            </Carousel.Slide>      <Carousel.Slide style={{ margin: "5px" }}>
              <Image fit="contain" radius="md" height={300} src={Slide3} alt="'Normally Open' engraved using a laser." caption="'Normally Open' engraved using a laser." />
            </Carousel.Slide>     <Carousel.Slide style={{ margin: "5px" }}>
              <Image fit="contain" radius="md" height={300} src={Slide4} alt="'Water PI' engraved using a laser." caption="'Water PI' engraved using a laser." />
            </Carousel.Slide>     <Carousel.Slide style={{ margin: "5px" }}>
              <Image fit="contain" radius="md" height={300} src={Slide5} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </section>
        <section id='LaserEngraving' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
          <Grid style={{ margin: "0px", padding: "20px" }}>
            <Grid.Col span={6}>
              <Carousel
                slideGap="md"
                dragFree
                loop
                breakpoints={[
                  { maxWidth: 'md', slideSize: '50%' },
                  { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                align="start"
              >
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height2} src={Slide1} alt="Dates engraved using a laser." caption="Dates engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height2} src={Slide2} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height2} src={Slide3} alt="'Normally Open' engraved using a laser." caption="'Normally Open' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height2} src={Slide4} alt="'Water PI' engraved using a laser." caption="'Water PI' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height2} src={Slide5} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                {/* ...other slides */}
              </Carousel>
            </Grid.Col>
            <Grid.Col span={6}>
              <Stack ref={ref2}>
                <Title style={{ color: "black", marginLeft: "50px" }} className={classes.subTitle}>Laser Engraving</Title>
                <Text className={classes.subTitleContent} style={{ color: "black", marginLeft: "50px" }}>Laser engraving is a type of laser marking that involves removing material from the surface of a workpiece to create a three-dimensional image or design. This is done by directing a high-powered laser beam onto the surface of the material, which vaporizes or removes the material to create the desired design.
                  Laser engraving can be used on a wide range of materials, including metals, plastics, glass, and wood, making it a versatile tool for many industrial and manufacturing applications. The precision and control offered by laser engraving allows for intricate designs and fine details to be created, making it ideal for personalizing or customizing products.
                  One of the benefits of laser engraving is that it is a non-contact process, which means that there is no physical contact between the engraving tool and the surface being engraved. This makes it suitable for delicate or heat-sensitive materials that cannot be marked using other methods.
                  Laser engraving is also a cost-effective solution for mass production, as a single laser engraving machine can be used to produce multiple products with the same design. </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </section>
        <section style={{ backgroundImage: `url(${handshake})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", height: "400px", padding: "30px" }}>
          <Center style={{ border: "10px solid white", height: `calc(400px - 30px)` }}>
            <Title style={{ color: "white" }} className={classes.headingSubTitle}>HIGH CUSTOMER SATISFACTION</Title>
          </Center>
        </section>
        <section id='LaserEtching' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
          <Grid style={{ margin: "0px", padding: "30px" }}>
            <Grid.Col span={6}>
              <Stack ref={ref3}>
                <Title style={{ color: "black" }} className={classes.subTitle}>Laser Etching</Title>
                <Text className={classes.subTitleContent} style={{ color: "black", marginRight: "50px" }}>Laser etching is a process that uses a laser beam to remove material from a surface to create intricate patterns, images, or text. The laser beam is precisely focused and directed onto the surface to be etched, causing the material to vaporize and leave behind a shallow depression in the surface. The depth and width of the etching can be precisely controlled by adjusting the laser beam's intensity, duration, and focus. This makes laser etching an ideal technique for creating precise and intricate designs in a variety of materials, including metals, plastics, glass, and wood. The process is also non-contact, making it ideal for etching delicate or sensitive surfaces without causing damage. Laser etching is widely used in a variety of industries, including electronics, aerospace, medical devices, and jewelry.</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={6}>
              <Carousel
                slideGap="md"
                dragFree
                loop
                breakpoints={[
                  { maxWidth: 'md', slideSize: '50%' },
                  { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                align="start"
              >
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height3} src={Slide1} alt="Dates engraved using a laser." caption="Dates engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height3} src={Slide2} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height3} src={Slide3} alt="'Normally Open' engraved using a laser." caption="'Normally Open' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height3} src={Slide4} alt="'Water PI' engraved using a laser." caption="'Water PI' engraved using a laser." />
                </Carousel.Slide>
                <Carousel.Slide style={{ margin: "5px" }}>
                  <Image fit="contain" radius="md" height={height3} src={Slide5} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
                </Carousel.Slide>
                {/* ...other slides */}
              </Carousel>
            </Grid.Col>
          </Grid>
        </section>

        <Anchor href='https://nanyangadvertising.com/contactus/' underline={false}>
          <section style={{ padding: "50px", backgroundColor: "#f4a620" }}>
            <Center>
              <Title style={{ color: "white" }} className={classes.headingSubTitle}>ORDER NOW!</Title>
            </Center>
          </section>
        </Anchor>

        <section>
          <Grid style={{ margin: "0px", padding: "20px" }}>
            <Grid.Col span={8} style={{ height: height4, width: "100%" }}> <iframe style="border:0;" style={{ height: "100%", width: "100%", borderRadius: "5px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.774946621124!2d103.85620941534455!3d1.3103595620646231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c8f7238dcb%3A0x3b5e8c488c92c45a!2s265%20Jln%20Besar%2C%20Singapore%20208938!5e0!3m2!1sen!2ssg!4v1676352301276!5m2!1sen!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid.Col>
            <Grid.Col ref={ref4} span={4} style={{ height: "100%", width: "100%" }}><Center style={{ height: "100%", width: "100%" }}><Stack>
              <Text className={classes.subTitleContent} style={{ fontFamily: `Quicksand, sans-serif` }}>Location: <br />
                265 JLN BESAR SINGAPORE 208938</Text>
              <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent} >Email: <br />
                nanyangadvertising@gmail.com</Text>
              <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent} >Phone: <br />
                +65 97209212</Text>
              <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent}>Business Hours: <br />
                Mon – Fri: 10am – 5pm</Text>
            </Stack></Center></Grid.Col>

          </Grid>
        </section>
      </>

        :
        <>
          <div style={{ height: `calc(100vh - 80px)`, backgroundImage: `url(${hero})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
            <Center style={{ height: "100%" }}>
              <Stack style={{ margin: "0px 0px 0px 0px" }}>
                <Title style={{ color: "white" }} className={classes.headingTitle}>SIGNAGES</Title>
                <Text style={{ color: "white" }} className={classes.headingSubTitle}><b>Let our quality speak for your business.</b></Text>
              </Stack>
            </Center>
          </div>
          <Text style={{ backgroundColor: "#31302f", color: "#f8eee1" }} align="center">SOMETHING AMAZING IS ABOUT TO HAPPEN</Text>
          <section id='LaserMarking' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
            <Grid style={{ margin: "0px", padding: "30px" }}>
              <Grid.Col span={12}>
                <Stack ref={ref}>
                  <Title style={{ color: "black" }} className={classes.subTitle}>Laser Marking</Title>
                  <Text className={classes.subTitleContent} style={{ color: "black" }}>Laser marking is a process of permanently marking or engraving a material by directing the output of a high-powered laser beam onto its surface. The laser beam removes material from the surface, creating a contrast or a permanent mark that can take the form of text, logos, barcodes, serial numbers, or graphics.
                    Laser marking is a versatile method of marking as it can be used on a wide range of materials, including metals, plastics, ceramics, and glass. It is a non-contact method, meaning that it does not physically touch the surface being marked, which makes it suitable for delicate or heat-sensitive materials.
                    There are several types of laser marking, including engraving, annealing, foaming, and ablation. Each type of laser marking uses a specific laser and marking process to produce a specific type of mark.
                    Laser marking offers several benefits over traditional marking methods, such as being more durable, precise, and legible.</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </section>
          <section style={{ padding: "10px" }}>
            <Carousel

              slideGap="md"
              breakpoints={[
                { maxWidth: 'md', slideSize: '50%' },
                { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
              ]}
              dragFree
              align="start"
            >
              <Carousel.Slide >
                <Image fit="contain" radius="md" height={300} src={Slide1} alt="Dates engraved using a laser." caption="Dates engraved using a laser." />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image fit="contain" radius="md" height={300} src={Slide2} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
              </Carousel.Slide>      <Carousel.Slide >
                <Image fit="contain" radius="md" height={300} src={Slide3} alt="'Normally Open' engraved using a laser." caption="'Normally Open' engraved using a laser." />
              </Carousel.Slide>     <Carousel.Slide  >
                <Image fit="contain" radius="md" height={300} src={Slide4} alt="'Water PI' engraved using a laser." caption="'Water PI' engraved using a laser." />
              </Carousel.Slide>     <Carousel.Slide >
                <Image fit="contain" radius="md" height={300} src={Slide5} alt="Contact details engraved using a laser." caption="Contact details engraved using a laser." />
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </section>
          <section id='LaserEngraving' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
            <Grid style={{ margin: "0px", padding: "30px" }}>
              <Grid.Col span={12}>
                <Stack ref={ref2}>
                  <Title style={{ color: "black" }} className={classes.subTitle}>Laser Engraving</Title>
                  <Text className={classes.subTitleContent} style={{ color: "black" }}>Laser engraving is a type of laser marking that involves removing material from the surface of a workpiece to create a three-dimensional image or design. This is done by directing a high-powered laser beam onto the surface of the material, which vaporizes or removes the material to create the desired design.
                    Laser engraving can be used on a wide range of materials, including metals, plastics, glass, and wood, making it a versatile tool for many industrial and manufacturing applications. The precision and control offered by laser engraving allows for intricate designs and fine details to be created, making it ideal for personalizing or customizing products.
                    One of the benefits of laser engraving is that it is a non-contact process, which means that there is no physical contact between the engraving tool and the surface being engraved. This makes it suitable for delicate or heat-sensitive materials that cannot be marked using other methods.
                    Laser engraving is also a cost-effective solution for mass production, as a single laser engraving machine can be used to produce multiple products with the same design. </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </section>
          <section style={{ backgroundImage: `url(${handshake})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center", height: "400px", padding: "30px" }}>
            <Center style={{ border: "10px solid white", height: `calc(400px - 30px)` }}>
              <Title style={{ color: "white" }} className={classes.headingSubTitle}>HIGH CUSTOMER SATISFACTION</Title>
            </Center>
          </section>
          <section id='LaserEtching' style={{ height: "auto", backgroundColor: "#faeddf", margin: "0px", padding: "0px" }}>
            <Grid style={{ margin: "0px", padding: "30px" }}>
              <Grid.Col span={12}>
                <Stack ref={ref3}>
                  <Title style={{ color: "black" }} className={classes.subTitle}>Laser Etching</Title>
                  <Text className={classes.subTitleContent} style={{ color: "black" }}>Laser etching is a process that uses a laser beam to remove material from a surface to create intricate patterns, images, or text. The laser beam is precisely focused and directed onto the surface to be etched, causing the material to vaporize and leave behind a shallow depression in the surface. The depth and width of the etching can be precisely controlled by adjusting the laser beam's intensity, duration, and focus. This makes laser etching an ideal technique for creating precise and intricate designs in a variety of materials, including metals, plastics, glass, and wood. The process is also non-contact, making it ideal for etching delicate or sensitive surfaces without causing damage. Laser etching is widely used in a variety of industries, including electronics, aerospace, medical devices, and jewelry.</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </section>
          <Anchor href='https://nanyangadvertising.com/contactus/' underline={false}>
            <section style={{ padding: "50px", backgroundColor: "#f4a620" }}>
              <Center>
                <Title style={{ color: "white" }} className={classes.headingSubTitle}>ORDER NOW!</Title>
              </Center>
            </section>
          </Anchor>
          <section style={{ paddingBottom: "10px" }}>
            <Stack>
              <div span={8} style={{ height: "100%", width: "100%" }}> <iframe style="border:0;" style={{ height: "100%", width: "100%", borderRadius: "5px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.774946621124!2d103.85620941534455!3d1.3103595620646231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c8f7238dcb%3A0x3b5e8c488c92c45a!2s265%20Jln%20Besar%2C%20Singapore%20208938!5e0!3m2!1sen!2ssg!4v1676352301276!5m2!1sen!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div ref={ref4} span={4} style={{ height: "100%", width: "100%" }}><Center style={{ height: "100%", width: "100%" }}><Stack>
                <Text className={classes.subTitleContent} style={{ fontFamily: `Quicksand, sans-serif` }}>Location: <br />
                  265 JLN BESAR SINGAPORE 208938</Text>
                <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent} >Email: <br />
                  nanyangadvertising@gmail.com</Text>
                <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent} >Phone: <br />
                  +65 97209212</Text>
                <Text style={{ fontFamily: `Quicksand, sans-serif` }} className={classes.subTitleContent}>Business Hours: <br />
                  Mon – Fri: 10am – 5pm</Text>
              </Stack></Center></div>
            </Stack>
          </section>

        </>}
    </>
  )
}

export default App;
