<template>
  <div class="mt-24 grid grid-cols-4 gap-4">
    <!-- QA #1 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        I already run Bitcoin Core. Why should I consider Bitcoin Knots?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Think of Bitcoin Knots as "Bitcoin Core with optional extras." If you're happy with
        Core, it's an excellent choice. However, if you need features like Pay-to-Endpoint for
        censorship resistance, early access to privacy patches like Coinswap, or a more
        conservative release cycle, then Knots is for you. It's the power-user's node.
      </div>
    </div>

    <!-- QA #2 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        Is Bitcoin Knots a "hard fork" or an "altcoin"?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Absolutely not. Bitcoin Knots is a software fork, not a consensus fork. It follows all
        the same rules as Bitcoin Core. You will be running a fully validating Bitcoin node on
        the exact same Bitcoin network. The differences lie in added features, policy patches,
        and release timing.
      </div>
    </div>

    <!-- QA #3 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        Is it safe to run Bitcoin Knots on the main network with real bitcoin?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Yes. Bitcoin Knots is built for production use on the main Bitcoin network. It is a
        stable, fully-validating node. As with any Bitcoin software, you should always verify
        the digital signatures of the download to ensure you have the authentic version.
      </div>
    </div>

    <!-- QA #4 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        What is the main philosophical difference between Knots and Core?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Bitcoin Core focuses on being a minimal, consensus-critical base layer for the entire
        network. Bitcoin Knots takes this solid base and integrates additional features and
        policy changes that are deemed useful but may be too experimental, controversial, or
        low-priority for immediate inclusion into Core. Knots serves as a testing ground and
        provides options for users who want more than the baseline.
      </div>
    </div>

    <!-- QA #5 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        I've heard about a debate regarding OP_RETURN and data. What is Bitcoin Knots' stance?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        This is a key differentiator. The Bitcoin Knots client implements a default policy that
        restricts the size of data carriers like OP_RETURN more than Bitcoin Core's default. The
        goal is to conserve block space for financial transactions and reduce blockchain bloat.
        It's important to understand that this is a node policy, not a consensus rule. Other
        nodes on the network may still relay and mine transactions that exceed this limit.
      </div>
    </div>

    <!-- QA #6 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        So, does the OP_RETURN policy mean Knots is incompatible with the network?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Not at all. Your node will still validate all blocks and transactions that follow the
        consensus rules. The policy only affects which unconfirmed transactions your node will
        willingly relay to its peers. This is similar to how different nodes may have different
        mempool size limits or fee requirements. It's about how you choose to participate in the
        peer-to-peer network.
      </div>
    </div>

    <!-- QA #7 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        Can I run both Bitcoin Core and Bitcoin Knots on the same machine?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        Yes, but you must configure them to use different data directories and ports to avoid
        conflicts. This is an advanced setup and requires carefully editing the bitcoin.conf
        file for one or both instances. We recommend most users run one primary node.
      </div>
    </div>

    <!-- QA #8 -->
    <div
      class="
            qa group cursor-pointer rounded-3xl p-8 text-xl text-onyx border-4 border-brand dark:border-onyx
            hover:border-onyx hover:text-onyx dark:hover:text-vanil
            dark:text-vanil dark:hover:border-vanil
          "
    >
      <div
        class="
              q mb-8 font-bold opacity-100
              group-hover:border-vanil group-hover:opacity-100
              dark:group-hover:text-vanil
            "
      >
        Where can I get help if I have a problem?
      </div>
      <div
        class="
            a invisible text-base
            group-hover:visible
          "
      >
        The best place for community support is the Bitcoin Knots mailing list. For bug reports
        and technical discussions, you can open an issue on the official GitHub repository.
        Remember, this is open-source software; patience and detailed problem reports are
        appreciated.
      </div>
    </div>
  </div>
</template>
