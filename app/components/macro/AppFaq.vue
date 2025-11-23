<template>
  <ul class="flex-row">
    <!-- QA #1 -->
    <AppFaqItem
      question="I already run Bitcoin Core. Why should I consider Bitcoin Knots?"
      answer="Think of Bitcoin Knots as Bitcoin Core with optional extras. If you're happy with
        Core, it's an excellent choice. However, if you need features like Pay-to-Endpoint for
        censorship resistance, early access to privacy patches like Coinswap, or a more
        conservative release cycle, then Knots is for you. It's the power-user's node."
    />
    <!-- QA #2 -->
    <AppFaqItem
      question="Is Bitcoin Knots a hard fork or an altcoin?"
      answer="Absolutely not. Bitcoin Knots is a software fork, not a consensus fork. It follows all
        the same rules as Bitcoin Core. You will be running a fully validating Bitcoin node on
        the exact same Bitcoin network. The differences lie in added features, policy patches,
        and release timing."
    />
    <!-- QA #3 -->
    <AppFaqItem
      question="Is it safe to run Bitcoin Knots on the main network with real bitcoin?"
      answer="Yes. Bitcoin Knots is built for production use on the main Bitcoin network. It is a
        stable, fully-validating node. As with any Bitcoin software, you should always verify
        the digital signatures of the download to ensure you have the authentic version."
    />
    <!-- QA #4 -->
    <AppFaqItem
      question="What is the main philosophical difference between Knots and Core?"
      answer="Bitcoin Core focuses on being a minimal, consensus-critical base layer for the entire
        network. Bitcoin Knots takes this solid base and integrates additional features and
        policy changes that are deemed useful but may be too experimental, controversial, or
        low-priority for immediate inclusion into Core. Knots serves as a testing ground and
        provides options for users who want more than the baseline."
    />
    <!-- QA #5 -->
    <AppFaqItem
      question="I've heard about a debate regarding OP_RETURN and data. What is Bitcoin Knots' stance?"
      answer="This is a key differentiator. The Bitcoin Knots client implements a default policy that
        restricts the size of data carriers like OP_RETURN more than Bitcoin Core's default. The
        goal is to conserve block space for financial transactions and reduce blockchain bloat.
        It's important to understand that this is a node policy, not a consensus rule. Other
        nodes on the network may still relay and mine transactions that exceed this limit."
    />
    <!-- QA #6 -->
    <AppFaqItem
      question="So, does the OP_RETURN policy mean Knots is incompatible with the network?"
      answer="Not at all. Your node will still validate all blocks and transactions that follow the
        consensus rules. The policy only affects which unconfirmed transactions your node will
        willingly relay to its peers. This is similar to how different nodes may have different
        mempool size limits or fee requirements. It's about how you choose to participate in the
        peer-to-peer network."
    />
    <!-- QA #7 -->
    <AppFaqItem
      question="Can I run both Bitcoin Core and Bitcoin Knots on the same machine?"
      answer="Yes, but you must configure them to use different data directories and ports to avoid
        conflicts. This is an advanced setup and requires carefully editing the bitcoin.conf
        file for one or both instances. We recommend most users run one primary node."
    />
    <!-- QA #8 -->
    <AppFaqItem
      question="Where can I get help if I have a problem?"
      answer="The best place for community support is the Bitcoin Knots mailing list. For bug reports
        and technical discussions, you can open an issue on the official GitHub repository.
        Remember, this is open-source software; patience and detailed problem reports are
        appreciated."
    />
  </ul>
</template>
