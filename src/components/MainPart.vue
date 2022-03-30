<template>
  <div>
    <NavBar> </NavBar>
    <HeaderContent> </HeaderContent>
    <HeaderFooter> </HeaderFooter>
    <AdvantagesOfShelving> </AdvantagesOfShelving>
    <StagesWork> </StagesWork>
    <CalculatorItem></CalculatorItem>
    <AwardsItems> </AwardsItems>
    <ClientsItems> </ClientsItems>
  </div>
</template>

<script>
import AdvantagesOfShelving from "./AdvantagesOfShelving.vue";
import AwardsItems from "./AwardsItems.vue";
import CalculatorItem from "../components/CalculatorItem.vue";
import ClientsItems from "../components/ClientsItems.vue";
import HeaderContent from "./HeaderContent.vue";
import HeaderFooter from "./HeaderFooter.vue";
import NavBar from "./NavBar.vue";
import StagesWork from "./StagesWork.vue";
// import NavBar from "./NavBar.vue";

export default {
  name: "MainPart",
  components: {
    AdvantagesOfShelving,
    AwardsItems,
    CalculatorItem,
    ClientsItems,
    HeaderContent,
    HeaderFooter,
    NavBar,
    StagesWork,
  },
  data: () => ({}),
};
</script>

<style>
</style>