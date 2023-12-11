<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  prize: {
    type: String,
    required: true,
    validator (value) {
      return value.length === 3
    }
  }
})

const { $gsap } = useNuxtApp()
const animation = ref(null)
const slotMachine = ref(null)
const handle = ref(null)
const text = ref(null)

const emojis = [
  'tangerine_1f34a.png',
  'cherries_1f352.png',
  'green-apple_1f34f.png',
  'unicorn_1f984.png',
  'lollipop_1f36d.png',
  'ghost_1f47b.png',
  'four-leaf-clover_1f340.png',
  'lemon_1f34b.png',
  'watermelon_1f349.png',
  'slot-machine_1f3b0.png',
  'grapes_1f347.png',
  'gem-stone_1f48e.png',
  'octopus_1f419.png',
  'hot-pepper_1f336-fe0f.png',
  'blueberries_1fad0.png',
  'kiwi-fruit_1f95d.png',
  'wine-glass_1f377.png',
  'crystal-ball_1f52e.png',
  'gem-stone_1f48e.png',
  'party-popper_1f389.png',
]

const slotMachineAnimation = {
  y: '-81.5%',
  stagger: .5,
  duration: 2.5,
  ease: "bounce.out"
}

onMounted(() => {
  animation.value = $gsap.to(`#${props.id} .reel`, {
    ...slotMachineAnimation,
    scrollTrigger: {
      trigger: slotMachine.value,
      start: 'top center',
      end: 'top bottom',
    }
  })

  const handleTimeline = $gsap.timeline({
    scrollTrigger: {
      trigger: slotMachine.value,
      start: 'top center',
      end: 'top bottom',
    }
  })

  handleTimeline.to(handle.value, {
    '--handle-height': '50%',
    duration: .5
  })

  handleTimeline.to(handle.value, {
    '--handle-height': '70%',
    duration: .5
  })

  $gsap.fromTo(text.value, {
    opacity: 0,
    y: -50
  }, {
    opacity: 1,
    y: 0,
    delay: 1,
    duration: .5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: slotMachine.value,
      start: 'top center',
      end: 'top bottom',
    }
  })

  $gsap.to(slotMachine.value, {
    y: 50,
    yoyo: true,
    repeat: 1,
    duration: .25,
    scrollTrigger: {
      trigger: slotMachine.value,
      start: 'top center',
      end: 'top bottom',
    }
  })
})

function spin () {
  $gsap.set(`#${props.id} .reel`, { y:'-3.75%' })
  animation.value = $gsap.to(`#${props.id} .reel`, slotMachineAnimation)
}

function pull () {
  animation.value && animation.value.kill()
  $gsap.to(`#${props.id} .reel`, {
    y: '-3.75%',
    stagger: .1,
    ease: "bounce.out",
    onComplete: spin,
  })

  $gsap.to(slotMachine.value, {
    y: 50,
    yoyo: true,
    repeat: 1,
    duration: .25
  })
}

function randomize(array) {
  return array.sort(() => (Math.random() > .5) ? 1 : -1)
}
</script>

<template>
  <section class="slot-machine-wrapper">
    <div class="slot-machine" :id="id" ref="slotMachine">
      <div class="reels">
        <div v-for="(letter, i) in prize" :key="i" class="door">
            <div class="reel">
              <span v-for="emoji in randomize(emojis).slice(0, -5)" :key="emoji">
                <ClientOnly>
                  <img :src="'https://em-content.zobj.net/source/apple/354/' + emoji" />
                </ClientOnly>
              </span>
              <span>{{ letter }}</span>
              <span v-for="emoji in randomize(emojis).slice(-2)" :key="emoji">
                <ClientOnly>
                  <img :src="'https://em-content.zobj.net/source/apple/354/' + emoji" />
                </ClientOnly>
              </span>
            </div>
        </div>
      </div>

      <div ref="text" class="text">
        <slot />
      </div>

      <button @click="pull" class="spin-handle" aria-label="Tirar">
        <div class="handle" ref="handle" />
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .slot-machine {
    --padding: 2rem;
    --border-radius: 1rem;
    position: relative;
    background: var(--gray-900);
    padding: var(--padding);
    border-radius: var(--border-radius);
    max-width: 600px;
    margin: 0 auto;
  }

  .reels {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 3rem;
    gap: var(--padding);
  }

  .reel {
    display: flex;
    flex-direction: column;
    transform: translateY(-3.75%);
    user-select: none;

    span {
      display: flex;
      flex-shrink: 0;
      height: calc(var(--door-height) / 1.75);
      padding: 2rem;
      justify-content: center;
      align-items: center;
      line-height: 1;

      img {
        height: 1em;
      }
    }
  }

  .door {
    --door-height: 12rem;
    background: var(--gray-1000);
    font-size: 5rem;
    height: var(--door-height);
    border-radius: calc(var(--border-radius) - 0.25rem);
    line-height: 1;
    overflow: hidden;
    flex-shrink: 0;
  }

  .text {
    font-size: $text-2xl;
    letter-spacing: -.025em;
    line-height: 1.4;
  }

  .spin-handle {
    display: flex;
    position: absolute;
    right: -4rem;
    top: 0;
    bottom: 0;
    appearance: none;
    background: transparent;
    border: 0;
    align-items: flex-end;
    --handle-color: var(--gray-900);

    &:hover {
      --handle-color: var(--white);
    }

    &:active .handle {
      height: 50% !important;
    }

    .handle {
      position: relative;
      width: 2rem;
      height: var(--handle-height, 70%);
      background: var(--handle-color);
      border-radius: var(--border-radius);
      transition: .25s ease;

      &::before {
        content: '';
        display: block;
        height: 4rem;
        width: 4rem;
        border-radius: 100%;
        background: var(--handle-color);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background .25s ease;
      }
    }
  }
</style>