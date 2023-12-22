<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'ca',
  },
})

useSeoMeta({
  title: 'Escoles en joc - Amb els nostres fills no es juga - Compromís',
  ogTitle: 'Escoles en joc - Amb els nostres fills no es juga - Compromís',
  description: 'El govern de Mazón vol que se puguen tornar a donar llicències a les cases d’apostes que es troben al costat dels centres educatius.',
  ogDescription: 'El govern de Mazón vol que se puguen tornar a donar llicències a les cases d’apostes que es troben al costat dels centres educatius.',
  ogImage: 'https://escolesenjoc.compromis.net/images/ogimage.png',
  twitterCard: 'summary_large_image',
})
</script>

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

        <Languages />

        <p v-motion-fade-visible>
          El govern de Mazón vol que se puguen tornar a donar llicències a les cases d’apostes que es troben al costat dels centres educatius, tal com reclama el lobby del joc.
        </p>
        <p v-motion-fade-visible>
          Esta mesure suposa un pas enrere en la lluita contra la ludopatia infantil i juvenil, al normalitzar que hi hagen casinos o cases de joc a menys de 850 metres d’instituts, centres de secundària i de formació professional.
        </p>
        <p>Esta es la realitat en dades:</p>
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
    <Map>
      <template #title>
        Mapa de centres educatius afectats
      </template>
      <p v-motion-fade-visible>
        Gràcies al treball de Compromís en la Generalitat Valenciana es va aconseguir
        allunyar les cases d'apostes dels centres educatius.
      </p>
      <p v-motion-fade-visible>
        Ara, amb esta cessió de Mazón a qui es lucra amb la ludopatia, els nostres
        xiquets i xiquetes podran tindre davant de l'eixida de classe estos establiments,
        amb el perill que suposa per a este tipus d'adiccions.
      </p>
      <p v-motion-fade-visible>
        En este mapa podeu veure com està la situació:
      </p>
    </Map>
  </main>
</template>
