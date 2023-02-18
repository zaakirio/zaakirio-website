<script>
import simpleIcons from "simple-icons";
export default {
  title: "InfoColumn",
  emits: ["hoverIn", "hoverOut"],
  data() {
    return {
      i: {
        protonmail: simpleIcons.Get("protonmail").svg,
        github: simpleIcons.Get("github").svg,
      },
    };
  },
};
</script>

<template>
  <div class="column">
    <div class="center">
      <h1>Zaakir</h1>
      <p>
        Hailing from Cape Town, South Africa, I am compelled by the analytical
        mind which has driven me to create, design and engineer solutions in all
        aspects of life. Currently I am working as a fullstack developer in
        London, UK. I have experience working with:
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Typescript</a
        >,
        <a
          href="https://reactjs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >React</a
        >,
        <a
          href="https://reactjs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Vue</a
        >,
        <a
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >C#</a
        >,
        <a
          href="https://vitejs.dev/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Vite</a
        >,
        <a
          href="https://vuejs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Vue</a
        >,
        <a
          href="https://docker.com/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Docker</a
        >, and
        <a
          href="https://twilio.com/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Twilio.</a
        >
        <br /><br />
        In my spare time I enjoy climbing and creating digital art
        illustrations. I am always interested in hearing about new ideas and
        projects and have a particular interest in the Crypto space.
        <br />
        <br />
        <!-- While you're here, feel free to check out my
        <router-link
          to="/projects"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >projects</router-link
        >
        or
        <a
          href="mailto:zaakir.ally@pm.me"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >get in touch</a
        >. -->
      </p>
      <div class="socials">
        <a
          v-html="i.protonmail"
          href="mailto:zaakir.ally@pm.me"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.github"
          href="https://github.com/zaakirio"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  background: var(--bg-primary);
  display: grid;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
}

.center {
  margin: 1rem auto;
  max-width: 480px;
  padding: 1rem 2.5rem;
}

h1 {
  color: var(--accent);
  font-size: 4rem;
  line-height: 1em;
  margin-bottom: 0.2em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.1s;
}

p {
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.2s;
  color: var(--text-primary);
  transition: color 0.2s;
}

p > a {
  color: inherit;
  font-weight: 500;
  transition: color 0s;
}

.special-link {
  color: var(--accent);
}

.socials {
  margin-top: 1.5em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.5s;
}

.socials a {
  fill: var(--text-secondary);
  text-decoration: none;
  margin-right: 1.2rem;
  transition: 0.2s;
}

.socials a:hover {
  fill: var(--accent);
}

@media only screen and (max-width: 510px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
