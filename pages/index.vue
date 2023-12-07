<template>
  <div class="container">
    <div class="intro-text">
      <p>
        El govern de Mazón vol que se puguen tornar a donar llicències a les cases d’apostes que es troben al costat dels centres educatius, tal com reclama el lobby del joc.
      </p>
      <p>
        Esta mesure suposa un pas enrere en la lluita contra la ludopatia infantil i juvenil, al normalitzar que hi hagen casinos o cases de joc a menys de 850 metres d’instituts, centres de secundària i de formació professional.
      </p>
    </div>
    <div class="slot-slides">
      <div class="slot-slide">
        <SlotMachine prize="40%" id="slotMachine1">
          1 de cada 4 menors juguen en cases d'aposta de forma regular segons dades del Defensor del Menor.
        </SlotMachine>
      </div>
      <div class="slot-slide">
        <SlotMachine prize="80%" id="slotMachine2">
          El 80% de les persones que pateixen són menors de 30 anys.
        </SlotMachine>
      </div>
      <div class="slot-slide">
        <SlotMachine prize="63%" id="slotMachine3">
          El 63% dels joves menors de 25 anys ha apostat en alguna ocasió.
        </SlotMachine>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .slot-slide {
    height: 100vh;

    &:not(:first-child) {
      margin-top: 25vh;
    }

    .slot-machine {
      position: sticky;
      top: 50vh;
      transform: translateY(-50%);
    }
  }

  .intro-text {
    font-size: 2rem;
    letter-spacing: -.025em;
    line-height: 1.5;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 20vh;
  }
</style>