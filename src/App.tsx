import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from '@mantine/hooks';
import HeaderNav from './components/headerNav';
import DrawerNav from './components/drawerNav';
import { Center, createStyles, Grid, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

const App = () => {
  const matches = useMediaQuery('(min-width: 850px)');
  const matches2 = useMediaQuery('(min-width: 680px)')

  const useStyles = createStyles({
    headingTitle : {
        fontSize:"15vw",
        fontFamily: `Quicksand, sans-serif`,
        '@media (max-width: 600px)': {
            fontSize:"17vw"
        },
    },
    headingSubTitle : {
        fontSize:"4vw",
        fontFamily: `Quicksand, sans-serif`,
        '@media (max-width: 600px)': {
            fontSize:"5vw"
        },
    },subTitleContent: {
      fontSize:"1vw",
      '@media (max-width: 1000px)': {
          fontSize:"1.7vw"
      },
      '@media (max-width: 660px)': {
          fontSize:"2.7vw"
      },
      '@media (max-width: 380px)': {
          fontSize:"3.7vw"
      },
  },
    subTitle : {
      fontSize:"6vw",
      '@media (max-width: 400px)': {
          fontSize:"8vw"
      },
  },
})

const { classes } = useStyles();

  return (
    <>
      {matches ? <HeaderNav/> : <DrawerNav />}
      {matches2 ? <> 
      <div style={{height:`calc(100vh - 80px)`,backgroundImage:`url("https://images.unsplash.com/photo-1576916385844-befd8945138c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
          <Center style={{height:"100%"}}>
              <Stack style={{margin:"0px 0px 0px 20px"}}>
                  <Title style={{ color:"white"}} className={classes.headingTitle}>LASERS</Title>
                  <Text style={{color:"white"}} className={classes.headingSubTitle}>A One Stop Solution.</Text>
              </Stack>
          </Center>
      </div>
      <Text style={{backgroundColor:"#31302f",color:"#f8eee1"}} align="center">SOMETHING AMAZING IS ABOUT TO HAPPEN</Text>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
          <Grid.Col span={6}>
              <Stack>
                <Title style={{color:"black"}} className={classes.subTitle}>Laser Marking</Title>
                <Text className={classes.subTitleContent} style={{color:"black", marginRight:"50px"}}>Laser marking is a process of permanently marking or engraving a material by directing the output of a high-powered laser beam onto its surface. The laser beam removes material from the surface, creating a contrast or a permanent mark that can take the form of text, logos, barcodes, serial numbers, or graphics.
                  Laser marking is a versatile method of marking as it can be used on a wide range of materials, including metals, plastics, ceramics, and glass. It is a non-contact method, meaning that it does not physically touch the surface being marked, which makes it suitable for delicate or heat-sensitive materials.
                  There are several types of laser marking, including engraving, annealing, foaming, and ablation. Each type of laser marking uses a specific laser and marking process to produce a specific type of mark.
                  Laser marking offers several benefits over traditional marking methods, such as being more durable, precise, and legible.</Text>
              </Stack>
          </Grid.Col>
          <Grid.Col span={6} style={{backgroundImage:`url("https://images.unsplash.com/photo-1615286922420-c6b348ffbd62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
          </Grid.Col>
        </Grid>
      </section>
      <section style={{backgroundImage:`url("https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center", height:"400px", padding:"30px"}}>
        <Center style={{border:"10px solid white", height:`calc(400px - 30px)`}}>
          <Title style={{color:"white"}} className={classes.headingSubTitle}>HIGH CUSTOMER SATISFACTION</Title>
        </Center>
      </section>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
        <Grid.Col span={6} style={{backgroundImage:`url("https://images.unsplash.com/photo-1620817025997-daae4e4a25f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
          </Grid.Col>
          <Grid.Col span={6}>
              <Stack>
                <Title style={{color:"black",marginLeft:"50px"}} className={classes.subTitle}>Laser Engraving</Title>
                <Text className={classes.subTitleContent} style={{color:"black", marginLeft:"50px"}}>Laser engraving is a type of laser marking that involves removing material from the surface of a workpiece to create a three-dimensional image or design. This is done by directing a high-powered laser beam onto the surface of the material, which vaporizes or removes the material to create the desired design.
                  Laser engraving can be used on a wide range of materials, including metals, plastics, glass, and wood, making it a versatile tool for many industrial and manufacturing applications. The precision and control offered by laser engraving allows for intricate designs and fine details to be created, making it ideal for personalizing or customizing products.
                  One of the benefits of laser engraving is that it is a non-contact process, which means that there is no physical contact between the engraving tool and the surface being engraved. This makes it suitable for delicate or heat-sensitive materials that cannot be marked using other methods.
                  Laser engraving is also a cost-effective solution for mass production, as a single laser engraving machine can be used to produce multiple products with the same design. </Text>
              </Stack>
          </Grid.Col>
        </Grid>
      </section>
      <section style={{padding:"50px",backgroundColor:"#f4a620"}}>
        <Center>
        <Title style={{color:"white"}} className={classes.headingSubTitle}>ORDER NOW!</Title>
        </Center>
      </section>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
          <Grid.Col span={6}>
              <Stack>
                <Title style={{color:"black"}} className={classes.subTitle}>Laser Edging</Title>
                <Text className={classes.subTitleContent} style={{color:"black", marginRight:"50px"}}>Laser edging is a process used to shape and refine the edges of a material, usually glass or plastic. The laser beam is directed onto the edge of the material, removing small amounts of material until the desired shape and finish are achieved. This process is highly precise and can produce edges with smooth, clean, and polished finishes.
                  Laser edging is commonly used in the production of eyeglasses, optical lenses, and other optical components. It is an effective method of edging because it provides accurate and consistent results, reduces waste and handling, and is faster than traditional mechanical methods. The laser beam can also be adjusted to produce a variety of edge shapes, including beveled, rounded, and flat edges.
                One of the key benefits of laser edging is that it allows for greater control over the edging process. The laser beam can be adjusted to precisely remove the desired amount of material, resulting in highly accurate and consistent edges. This makes it ideal for producing high-quality optical components and other precision parts.
                In addition to its precision, laser edging is also a safe and environmentally friendly process. </Text>
              </Stack>
          </Grid.Col>
          <Grid.Col span={6} style={{backgroundImage:`url("https://images.unsplash.com/photo-1605419589330-0b6dede4c265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
          </Grid.Col>
        </Grid>
      </section></> 
      :
       <>
      <div style={{height:`calc(100vh - 80px)`,backgroundImage:`url("https://images.unsplash.com/photo-1576916385844-befd8945138c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
          <Center style={{height:"100%"}}>
              <Stack style={{margin:"0px 0px 0px 20px"}}>
                  <Title style={{ color:"white"}} className={classes.headingTitle}>LASERS</Title>
                  <Text style={{color:"white"}} className={classes.headingSubTitle}>A One Stop Solution.</Text>
              </Stack>
          </Center>
      </div>
      <Text style={{backgroundColor:"#31302f",color:"#f8eee1"}} align="center">SOMETHING AMAZING IS ABOUT TO HAPPEN</Text>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
          <Grid.Col span={12}>
              <Stack>
                <Title style={{color:"black"}} className={classes.subTitle}>Laser Marking</Title>
                <Text className={classes.subTitleContent} style={{color:"black"}}>Laser marking is a process of permanently marking or engraving a material by directing the output of a high-powered laser beam onto its surface. The laser beam removes material from the surface, creating a contrast or a permanent mark that can take the form of text, logos, barcodes, serial numbers, or graphics.
                  Laser marking is a versatile method of marking as it can be used on a wide range of materials, including metals, plastics, ceramics, and glass. It is a non-contact method, meaning that it does not physically touch the surface being marked, which makes it suitable for delicate or heat-sensitive materials.
                  There are several types of laser marking, including engraving, annealing, foaming, and ablation. Each type of laser marking uses a specific laser and marking process to produce a specific type of mark.
                  Laser marking offers several benefits over traditional marking methods, such as being more durable, precise, and legible.</Text>
              </Stack>
          </Grid.Col>
        </Grid>
      </section>
      <section style={{backgroundImage:`url("https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center", height:"400px", padding:"30px"}}>
        <Center style={{border:"10px solid white", height:`calc(400px - 30px)`}}>
          <Title style={{color:"white"}} className={classes.headingSubTitle}>HIGH CUSTOMER SATISFACTION</Title>
        </Center>
      </section>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
          <Grid.Col span={12}>
              <Stack>
                <Title style={{color:"black"}} className={classes.subTitle}>Laser Engraving</Title>
                <Text className={classes.subTitleContent} style={{color:"black"}}>Laser engraving is a type of laser marking that involves removing material from the surface of a workpiece to create a three-dimensional image or design. This is done by directing a high-powered laser beam onto the surface of the material, which vaporizes or removes the material to create the desired design.
                  Laser engraving can be used on a wide range of materials, including metals, plastics, glass, and wood, making it a versatile tool for many industrial and manufacturing applications. The precision and control offered by laser engraving allows for intricate designs and fine details to be created, making it ideal for personalizing or customizing products.
                  One of the benefits of laser engraving is that it is a non-contact process, which means that there is no physical contact between the engraving tool and the surface being engraved. This makes it suitable for delicate or heat-sensitive materials that cannot be marked using other methods.
                  Laser engraving is also a cost-effective solution for mass production, as a single laser engraving machine can be used to produce multiple products with the same design. </Text>
              </Stack>
          </Grid.Col>
        </Grid>
      </section>
      <section style={{padding:"50px",backgroundColor:"#f4a620"}}>
        <Center>
        <Title style={{color:"white"}} className={classes.headingSubTitle}>ORDER NOW!</Title>
        </Center>
      </section>
      <section style={{height:"auto",backgroundColor:"#faeddf", margin:"0px", padding:"0px"}}>
        <Grid style={{margin:"0px", padding:"30px"}}>
          <Grid.Col span={12}>
              <Stack>
                <Title style={{color:"black"}} className={classes.subTitle}>Laser Edging</Title>
                <Text className={classes.subTitleContent} style={{color:"black"}}>Laser edging is a process used to shape and refine the edges of a material, usually glass or plastic. The laser beam is directed onto the edge of the material, removing small amounts of material until the desired shape and finish are achieved. This process is highly precise and can produce edges with smooth, clean, and polished finishes.
                  Laser edging is commonly used in the production of eyeglasses, optical lenses, and other optical components. It is an effective method of edging because it provides accurate and consistent results, reduces waste and handling, and is faster than traditional mechanical methods. The laser beam can also be adjusted to produce a variety of edge shapes, including beveled, rounded, and flat edges.
                One of the key benefits of laser edging is that it allows for greater control over the edging process. The laser beam can be adjusted to precisely remove the desired amount of material, resulting in highly accurate and consistent edges. This makes it ideal for producing high-quality optical components and other precision parts.
                In addition to its precision, laser edging is also a safe and environmentally friendly process. </Text>
              </Stack>
          </Grid.Col>
        </Grid>
      </section></>}

    </>
  )
}

export default App;
