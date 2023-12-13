<template>
  <main>
    <Hero />
    <div class="container">
      <section class="text text-intro">
        <h1 v-motion-fade-visible>
          Amb els<br>
          nostres fills<br>
          no es juga
        </h1>
        <p v-motion-fade-visible>
          El govern de Mazón vol que se puguen tornar a donar llicències a les cases d’apostes que es troben al costat dels centres educatius, tal com reclama el lobby del joc.
        </p>
        <p v-motion-fade-visible>
          Esta mesure suposa un pas enrere en la lluita contra la ludopatia infantil i juvenil, al normalitzar que hi hagen casinos o cases de joc a menys de 850 metres d’instituts, centres de secundària i de formació professional.
        </p>
        <p>Esta es la realitat...</p>
      </section>
      <section class="slot-slides">
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
      </section>
      <section class="text text-trailer">
        <p v-motion-fade-visible>
          El govern de Mazón vol que se puguen tornar a posar cases d’apostes al costat
          dels centres educatius, tal com reclama el lobby del joc.
        </p>
        <p v-motion-fade-visible>
          Esta mesura suposa un pas enrere en la lluita contra la ludopatia infantil i juvenil,
          suposa normalitzar que hi hagen casinos o cases de joc a menys de 850 metres d’instituts,
          centres de secundària i de formació professional.
        </p>
      </section>
    </div>
    <Map />
  </main>
</template>

<style lang="scss">
  main {
    --text-container: 850px;
    padding: 1rem;
  }

  .slot-slide {
    min-height: 60vh;
    padding: 4rem 0;

    &:first-child {
      margin-top: 25vh;
    }

    &:last-child {
      margin-bottom: 25vh;
    }

    .slot-machine-wrapper {
      position: sticky;
      top: 50vh;
      transform: translateY(-50%);
    }
  }

  .text {
    font-size: var(--text-lg);
    letter-spacing: -.03em;
    line-height: 1.3;

    &-intro {
      max-width: var(--text-container);
      margin: 0 auto;
      
      h1 {
        font-size: var(--text-2xl);
        line-height: 1;
      }
    }

    &-trailer {
      max-width: var(--text-container);
      margin: 0 auto;
      margin-top: -25vh;
    }

    p {
      margin: 1em 0;
    }
  }

  @media (max-width: 1500px) {
    .text-intro {
      max-width: 600px;
      margin-left: auto;
    }
  }
</style>