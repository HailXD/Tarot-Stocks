const tarotData = [
    {
        name: "The Fool",
        core: "Beginnings, innocence, spontaneity, free spirit.",
        coreRev: "Recklessness, holding back, naivete, risk-aversion.",
        interp: "A new, speculative investment is on the horizon, like an IPO or a high-risk tech stock. This is a call to take a calculated leap of faith on an unknown opportunity with high growth potential, but also high risk.",
        interpRev:
            "You may be investing recklessly without due diligence or following 'hot tips' naively. Conversely, extreme risk-aversion is causing you to miss out on new market trends and opportunities. Re-evaluate your risk profile.",
    },
    {
        name: "The Magician",
        core: "Manifestation, resourcefulness, power, inspired action.",
        coreRev: "Manipulation, poor planning, untapped talents, illusion.",
        interp: "You have all the analytical tools, capital, and resources you need to execute a successful trade. It is time to act on your investment strategy with focus and willpower. Your potential to manifest gains is at its peak.",
        interpRev:
            "There's a disconnect between your financial goals and your trading actions, possibly due to a flawed strategy or market manipulation like a 'pump and dump' scheme. Your capital or skills are currently being wasted.",
    },
    {
        name: "The High Priestess",
        core: "Intuition, sacred knowledge, divine feminine, the subconscious mind.",
        coreRev: "Secrets, disconnected from intuition, withdrawal, silence.",
        interp: "Trust your intuition about a stock or market trend; your gut feeling is your best guide now. There is hidden information or underlying value that is not immediately obvious in the charts. A period of quiet research is encouraged.",
        interpRev:
            "You are ignoring your intuition or major red flags in your analysis, leading to poor investment choices. Crucial information about a company's financial health may be hidden from you. Reconnect with your initial research.",
    },
    {
        name: "The Empress",
        core: "Femininity, beauty, nature, nurturing, abundance.",
        coreRev: "Creative block, dependence on others, smothering, emptiness.",
        interp: "This card represents a period of lush growth, fertility, and abundance in your portfolio. It is time to nurture your long-term investments and watch them grow. Sectors related to consumer goods, agriculture, or creative arts may flourish.",
        interpRev:
            "A creative or financial block is hindering your portfolio's growth. You might be overly dependent on a single 'safe' stock for security. You may feel a sense of scarcity or that your investments are barren.",
    },
    {
        name: "The Emperor",
        core: "Authority, establishment, structure, a father figure.",
        coreRev: "Domination, excessive control, rigidity, lack of discipline.",
        interp: "You are being called to bring structure and order to your portfolio. Invest in established 'blue-chip' companies and build a solid, disciplined foundation for your wealth. Stability and strategic, long-term thinking are key.",
        interpRev:
            "Your investment strategy has become too rigid and is failing to adapt to market changes. Or, you are struggling with a lack of discipline, leading to chaotic trading. You may be clashing with market regulations.",
    },
    {
        name: "The Hierophant",
        core: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.",
        coreRev:
            "Personal beliefs, freedom, challenging the status quo, restriction.",
        interp: "This is a time for embracing traditional investment wisdom. Follow the advice of established financial institutions or invest in conventional products like index funds. A conservative, structured approach is beneficial right now.",
        interpRev:
            "You are questioning traditional market wisdom and forging your own investment thesis. This can be liberating but also risky. Be wary of rigid dogmas from financial 'gurus' and challenge rules that no longer serve you.",
    },
    {
        name: "The Lovers",
        core: "Love, harmony, relationships, values alignment, choices.",
        coreRev: "Disharmony, imbalance, misalignment of values, conflict.",
        interp: "A significant choice regarding your portfolio is before you, perhaps choosing between two very different stocks or strategies. Your decisions should be based on your personal financial values and risk tolerance to create a harmonious portfolio.",
        interpRev:
            "You are facing conflict and disharmony in your portfolio due to a misalignment with your financial values or risk tolerance. A poor investment choice has led to negative consequences. Re-evaluate your holdings.",
    },
    {
        name: "The Chariot",
        core: "Control, willpower, victory, assertion, determination.",
        coreRev: "Lack of control, lack of direction, aggression, obstacles.",
        interp: "With determination and focused willpower, you will overcome market volatility and achieve victory in your trades. You must assertively manage your portfolio and take control. This is a time for decisive action to move your finances forward.",
        interpRev:
            "You are feeling powerless and without direction as market forces move against you. Your trading efforts are scattered and ineffective, or you are being overly aggressive (revenge trading). Regain focus before you proceed.",
    },
    {
        name: "Strength",
        core: "Strength, courage, patience, control, compassion.",
        coreRev: "Weakness, self-doubt, lack of self-control, raw emotion.",
        interp: "True investment strength comes from courage, compassion, and patience, not aggressive force. You have the inner fortitude to hold through volatility and tame your fear and greed. A soft touch and quiet confidence will prevail.",
        interpRev:
            "Self-doubt and fear are causing you to panic sell or FOMO buy. Raw, uncontrolled emotions are dictating your trades. It's time to reconnect with your courage and find your strategic power again.",
    },
    {
        name: "The Hermit",
        core: "Soul-searching, introspection, being alone, inner guidance.",
        coreRev: "Isolation, loneliness, withdrawal, paranoia.",
        interp: "It is time to retreat from the noise of the market for a period of introspection and deep research. By turning inward, you will find undervalued gems and the guidance you seek. This journey of self-discovery is a necessary part of your path.",
        interpRev:
            "You have withdrawn too much from the market, leading to feelings of loneliness and missed opportunities. You may be rejecting sound advice out of fear or paranoia about a crash. It's time to re-engage.",
    },
    {
        name: "The Wheel of Fortune",
        core: "Good luck, karma, life cycles, destiny, a turning point.",
        coreRev:
            "Bad luck, resistance to change, breaking cycles, unforeseen setbacks.",
        interp: "A significant market cycle is turning, and fate is spinning in your favor. This card signifies positive change, luck, and a turning point for your portfolio. Embrace the new opportunities that are coming your way.",
        interpRev:
            "You are experiencing a period of bad luck or facing an unexpected market downturn. You may be resisting a necessary portfolio change, which is only making things harder. Accept that some market forces are outside your control.",
    },
    {
        name: "Justice",
        core: "Justice, fairness, truth, cause and effect, law.",
        coreRev:
            "Unfairness, lack of accountability, dishonesty, karmic retribution.",
        interp: "The true value of a company will be revealed, and the market will price it fairly. Your investment decisions have consequences. Make trades with clarity, impartiality, and integrity, and pay attention to legal or regulatory news.",
        interpRev:
            "You are experiencing an unfair market condition, like manipulation, or are being dishonest in your own analysis. A lack of accountability for bad trades is causing problems. Be prepared for the financial consequences of past actions.",
    },
    {
        name: "The Hanged Man",
        core: "Pause, surrender, letting go, new perspectives.",
        coreRev: "Delays, resistance, stalling, indecision, sacrifice.",
        interp: "You are being called to pause your trading and see your portfolio from a new perspective. By surrendering the need to act and letting go of control, you will gain valuable insight. This is a time for reflection, not action.",
        interpRev:
            "You are resisting selling a losing position, causing stagnation and further losses. Your refusal to let go is preventing progress. Indecision is holding your capital in limbo, and a necessary sacrifice is being avoided.",
    },
    {
        name: "Death",
        core: "Endings, change, transformation, transition.",
        coreRev:
            "Resistance to change, personal transformation, inner purging, stagnation.",
        interp: "A major market trend is ending, making way for something new. This card signifies the need to sell off old positions and embrace transformation. This change is essential for your portfolio's growth.",
        interpRev:
            "You are resisting selling a failing stock, which is causing you pain and preventing your portfolio's growth. You must let go of what no longer serves you to move forward. Stagnation is the result of clinging to past winners.",
    },
    {
        name: "Temperance",
        core: "Balance, moderation, patience, finding meaning.",
        coreRev: "Imbalance, excess, self-healing, re-alignment.",
        interp: "This card represents the need for balance, patience, and moderation in your portfolio. By blending different asset classes and finding a middle path on risk, you will achieve harmony and long-term growth. You are being guided to find calm.",
        interpRev:
            "Your portfolio is out of balance, perhaps due to excessive risk or over-concentration in one sector. This is a time for re-aligning your holdings with your goals. You need to take a step back and find your center.",
    },
    {
        name: "The Devil",
        core: "Addiction, materialism, playfulness, negative patterns.",
        coreRev: "Breaking free, release, restoring control, detachment.",
        interp: "You are feeling trapped by a losing investment, addictive trading behavior, or a 'get rich quick' mentality. This card highlights the chains of your own making that limit your financial freedom. Acknowledge these bonds to address them.",
        interpRev:
            "You are on the verge of breaking free from a bad investment or a destructive trading habit. This is a powerful time of release and reclaiming your financial power. You are beginning to see the path to freedom by selling the toxic asset.",
    },
    {
        name: "The Tower",
        core: "Sudden change, upheaval, chaos, revelation, awakening.",
        coreRev:
            "Personal transformation, fear of change, averting disaster, resistance.",
        interp: "A sudden market crash or catastrophic company news is set to destroy a false belief you held about an investment. While chaotic, this destruction makes way for truth and a new, stronger foundation for your portfolio. This is a necessary awakening.",
        interpRev:
            "You are resisting a massive change, like selling a stock before it collapses, but the longer you hold on, the more painful it will be. You may have narrowly averted a margin call, but the underlying issues remain.",
    },
    {
        name: "The Star",
        core: "Hope, faith, purpose, renewal, spirituality.",
        coreRev: "Lack of faith, despair, self-trust, disconnection.",
        interp: "After a period of market turmoil, this card brings a sense of hope, healing, and renewal to your portfolio. You are on the right path and should have faith in your long-term strategy. This is a time for calm reassurance and recovery.",
        interpRev:
            "You have lost hope and are feeling disconnected from your financial goals, leading to despair over losses. It is crucial to find a way to trust in your strategy and the market's long-term potential again. You are not as lost as you feel.",
    },
    {
        name: "The Moon",
        core: "Illusion, fear, anxiety, subconscious, intuition.",
        coreRev:
            "Release of fear, repressed emotion, inner confusion, clarity.",
        interp: "Things in the market are not as they seem; you are navigating a world of illusion, FUD (Fear, Uncertainty, and Doubt), and hype. Your fears and anxieties may be heightened. Trust your intuition to guide you through this confusing time.",
        interpRev:
            "You are beginning to release your fears and see through market illusions, bringing newfound clarity to your trading. Repressed anxieties about loss are surfacing to be dealt with. The confusion is starting to lift.",
    },
    {
        name: "The Sun",
        core: "Positivity, fun, warmth, success, vitality.",
        coreRev:
            "Inner child, feeling down, overly optimistic, lack of success.",
        interp: "This card radiates success, joy, and vitality, promising a period of clear skies and a strong bull market. Embrace the warmth and positivity that surrounds your portfolio. Your success is clear and well-deserved.",
        interpRev:
            "Your optimism about a particular stock may be misplaced or overly enthusiastic. You are feeling temporarily down due to a market dip. Expected gains may be delayed but are not necessarily denied.",
    },
    {
        name: "Judgement",
        core: "Judgement, rebirth, inner calling, absolution.",
        coreRev:
            "Self-doubt, inner critic, ignoring the call, fear of judgement.",
        interp: "You are at a financial crossroads, and a significant decision about your entire portfolio is upon you, representing a form of rebirth for your strategy. Listen to your inner calling and rise to a new level of financial consciousness.",
        interpRev:
            "You are plagued by self-doubt and an overly critical inner voice, preventing you from making a necessary trade. You are ignoring your true financial goals out of fear of being wrong. You must forgive yourself for past losses to move forward.",
    },
    {
        name: "The World",
        core: "Completion, integration, accomplishment, travel.",
        coreRev:
            "Seeking personal closure, short-cuts, delays, lack of completion.",
        interp: "You have successfully completed a major investment cycle and are celebrating your financial accomplishments. Your portfolio is whole, integrated, and well-diversified. The world is open to you; consider global investments.",
        interpRev:
            "You have not fully completed your investment strategy, perhaps selling too early and leaving gains on the table. You may have taken shortcuts in your research. It's time to tie up loose ends for true financial closure.",
    },
    {
        name: "Ace of Cups",
        core: "New love, compassion, creativity, overwhelming emotion.",
        coreRev: "Blocked or repressed emotions, emotional loss, emptiness.",
        interp: "A new flow of capital is entering your life or the market. This could be the start of a new investment that you feel intuitively good about. Open your portfolio to this new creative and emotional opportunity.",
        interpRev:
            "You are blocking your desire to invest or have recently suffered a financial loss. There may be a creative block in finding new opportunities or a feeling of being financially unfulfilled. Your investment capital feels blocked.",
    },
    {
        name: "II of Cups",
        core: "Unified love, partnership, mutual attraction, connection.",
        coreRev: "Break-up, disharmony, distrust, imbalance in relationship.",
        interp: "This card represents a successful merger, acquisition, or corporate partnership. It signifies a harmonious and mutually beneficial relationship between two entities that will create value for shareholders. Shared goals are key.",
        interpRev:
            "A proposed merger is failing or a corporate partnership is suffering from distrust and imbalance. There is a fundamental disharmony that needs to be addressed. This could signify a deal falling apart, hurting the stock price.",
    },
    {
        name: "III of Cups",
        core: "Celebration, friendship, creativity, community.",
        coreRev: "An affair, gossip, isolation, 'three's a crowd'.",
        interp: "It's time to celebrate investment gains. This card can signify a booming sector where multiple companies are thriving together, or the joy of sharing success with an investment club or community.",
        interpRev:
            "Social dynamics are negatively impacting a stock, possibly due to market gossip, rumors or an unhealthy speculative bubble. You may feel isolated from a market rally that everyone else is enjoying.",
    },
    {
        name: "IV of Cups",
        core: "Meditation, contemplation, apathy, re-evaluation.",
        coreRev: "Retreat, withdrawal, checking in for alignment, boredom.",
        interp: "The market is presenting clear buying opportunities, but you are too apathetic or distracted to notice them. This is a time for contemplation and re-evaluating what you truly want from your investments. Don't let good stocks pass you by.",
        interpRev:
            "After a period of market apathy, you are beginning to emerge and take interest in new opportunities again. You have withdrawn to realign with your true financial goals. Boredom is giving way to new possibilities.",
    },
    {
        name: "V of Cups",
        core: "Regret, failure, disappointment, pessimism.",
        coreRev: "Personal setbacks, self-forgiveness, moving on.",
        interp: "You are focused on your losing stocks and past disappointments, unable to see the winning positions that still remain in your portfolio. While it's okay to analyze losses, this card warns against dwelling in regret.",
        interpRev:
            "You are beginning to forgive yourself for past investment mistakes, allowing you to move on. You've accepted your losses and are now ready to see the new opportunities ahead. Healing from 'loss aversion' is possible.",
    },
    {
        name: "VI of Cups",
        core: "Revisiting the past, childhood memories, innocence, joy.",
        coreRev: "Living in the past, forgiveness, lacking playfulness.",
        interp: "This card brings a sense of nostalgia. You may be reconnecting with a 'legacy' brand or revisiting a successful old investment strategy. It's a time to look at companies with long, stable histories.",
        interpRev:
            "You are stuck living in the past, unable to adapt your strategy to the new market. It may be time to forgive yourself for a past loss to release its hold on you. You are clinging to a stock that was a winner long ago.",
    },
    {
        name: "VII of Cups",
        core: "Opportunities, choices, wishful thinking, illusion.",
        coreRev: "Alignment, personal values, overwhelming choices, clarity.",
        interp: "You are faced with many 'hot' stocks and investment choices, but some may be illusions or wishful thinking. You must look beyond the hype to make a wise decision. Be careful not to get lost in speculative daydreams.",
        interpRev:
            "The market illusion is fading, and you are gaining clarity on what you truly want to invest in. You are aligning your trades with your core strategy. The overwhelming number of options is narrowing down to a clear path.",
    },
    {
        name: "VIII of Cups",
        core: "Disappointment, abandonment, withdrawal, escapism.",
        coreRev: "Trying one more time, indecision, aimless drifting.",
        interp: "You are selling a position that no longer financially fulfills you. While it can be difficult to admit a mistake and take a loss, you know it's necessary for your portfolio's health. This is a journey of seeking better returns elsewhere.",
        interpRev:
            "You are hesitating to sell a disappointing stock, wondering if you should give it one more chance. This indecision is causing your capital to drift aimlessly. You must decide whether to stay or go.",
    },
    {
        name: "IX of Cups",
        core: "Contentment, satisfaction, gratitude, wish come true.",
        coreRev: "Smugness, dissatisfaction, materialism, unfulfilled wishes.",
        interp: "This is the 'wish' card of investing, signifying that your stock has hit its price target. You are feeling a deep sense of contentment and satisfaction with your portfolio. Enjoy this period of financial well-being.",
        interpRev:
            "You are feeling dissatisfied with your returns, despite a strong market. Your 'wish' stock has not been fulfilled, or you are acting with smugness about your wins. True contentment is not tied to your account balance.",
    },
    {
        name: "X of Cups",
        core: "Divine love, blissful relationships, harmony, alignment.",
        coreRev:
            "Disconnectedness, misaligned values, struggling relationships.",
        interp: "This card represents ultimate portfolio fulfillment and harmonious growth. You are perfectly aligned with your financial goals and experiencing true, long-term security. This is a picture of a 'happily ever after' portfolio.",
        interpRev:
            "Your portfolio is experiencing conflict and disconnection, with assets working against each other. There is a misalignment of strategies causing struggles and poor returns. The picture-perfect ideal is not matching your reality.",
    },
    {
        name: "Page of Cups",
        core: "Creative opportunities, intuitive messages, curiosity, possibility.",
        coreRev:
            "New ideas, doubting intuition, creative blocks, emotional immaturity.",
        interp: "Be open to creative investment opportunities and intuitive messages. This card signals a time of curiosity and exploring new, smaller companies. A new, heartfelt 'hot tip' may be on its way; do your own research.",
        interpRev:
            "You are experiencing a creative block in finding new investments or are doubting your own market intuition. Emotional or immature trading may be causing problems. It's time to listen to your gut, even if you feel insecure.",
    },
    {
        name: "Knight of Cups",
        core: "Creativity, romance, charm, imagination, beauty.",
        coreRev: "Overactive imagination, unrealistic, jealousy, moodiness.",
        interp: "A charming and romantic 'story stock' is entering your radar. This is a time for following an attractive narrative, but be aware of the risks. Let yourself be swept away by the potential, but keep your stop-loss in mind.",
        interpRev:
            "You are being unrealistic about a stock's potential or getting lost in its fantasy 'story'. Moodiness is causing erratic trading. An investment that seems too good to be true probably is.",
    },
    {
        name: "Queen of Cups",
        core: "Compassionate, caring, emotionally stable, intuitive, in flow.",
        coreRev:
            "Emotional insecurity, co-dependency, martyrdom, manipulation.",
        interp: "You are in touch with market sentiment and your own intuition, acting with emotional balance. You are a source of calm confidence for other investors. Trust your gut feelings, as it is a reliable guide in the market.",
        interpRev:
            "You are feeling emotionally insecure or are becoming co-dependent on a single stock's performance. Be careful not to 'martyr' yourself by holding a loser. It's time to set healthy emotional boundaries with your portfolio.",
    },
    {
        name: "King of Cups",
        core: "Emotionally balanced, compassionate, diplomatic, in control.",
        coreRev: "Emotional manipulation, moodiness, volatility, selfishness.",
        interp: "You have mastered your trading psychology and can navigate any market with compassion and diplomacy. You are a pillar of emotional strength and stability. Your wisdom comes from a perfect balance of analysis and intuition.",
        interpRev:
            "Someone, perhaps you or a market guru, is using emotional manipulation (hype or FUD) to control a stock's narrative. Moodiness and emotional volatility are causing unstable price action and poor decisions.",
    },
    {
        name: "Ace of Swords",
        core: "Breakthroughs, new ideas, mental clarity, truth.",
        coreRev:
            "Confusion, lack of clarity, misinformation, clouded judgment.",
        interp: "A powerful analytical breakthrough is cutting through market noise, bringing you mental clarity and a new investment thesis. This is a moment of pure truth and intellectual power. Seize this new understanding to make a decisive trade.",
        interpRev:
            "You are experiencing confusion and a lack of mental clarity about an investment. Misinformation or clouded judgment is preventing you from seeing the stock's true potential or risks. Think carefully before acting.",
    },
    {
        name: "II of Swords",
        core: "Difficult choices, indecision, stalemate, blocked emotions.",
        coreRev:
            "Indecision, confusion, information overload, emotional turmoil.",
        interp: "You are facing a difficult choice (e.g., buy or sell) and are at a stalemate. The market may be in a period of low-volatility consolidation. You may be blocking your gut feeling to avoid the truth of the situation.",
        interpRev:
            "The market stalemate is breaking, but it is leading to more confusion and emotional turmoil. You are overwhelmed with conflicting data and analysis, and cannot make a clear decision. It's time to face your feelings about the trade.",
    },
    {
        name: "III of Swords",
        core: "Heartbreak, emotional pain, sorrow, grief, hurt.",
        coreRev: "Negative self-talk, releasing pain, optimism, forgiveness.",
        interp: "This card signifies a painful truth, like a disastrous earnings report, that leads to financial heartbreak and sorrow. While deeply painful, this clarity is necessary for you to sell the position and begin healing your portfolio.",
        interpRev:
            "You are beginning to recover from a painful financial loss, releasing the sorrow and forgiving yourself for the mistake. Be wary of negative self-talk that prolongs the hurt. The worst of the financial pain is behind you now.",
    },
    {
        name: "IV of Swords",
        core: "Rest, relaxation, meditation, contemplation, recuperation.",
        coreRev: "Exhaustion, burn-out, deep contemplation, stagnation.",
        interp: "It is time to rest, step away from the charts, and recharge your mental batteries. This card calls for a period of peace and quiet contemplation after a period of stressful trading. Stepping back will give you the clarity you need.",
        interpRev:
            "You have pushed yourself to the point of exhaustion and trading burnout. A lack of rest is leading to portfolio stagnation and poor decisions. You must take a break before you suffer a major financial collapse.",
    },
    {
        name: "V of Swords",
        core: "Conflict, competition, defeat, winning at all costs.",
        coreRev: "Reconciliation, making amends, past resentment, remorse.",
        interp: "This card signifies a conflict where a trade's victory comes at a great cost, such as a hostile takeover or a successful short-sale that creates bitterness. You may have won the trade but created resentment. There are no true winners here.",
        interpRev:
            "You are seeking reconciliation after a painful conflict, perhaps with an investment partner. Releasing past resentments about a trade is key to moving forward. There is remorse for the financial hurt that has been caused.",
    },
    {
        name: "VI of Swords",
        core: "Transition, change, rite of passage, releasing baggage.",
        coreRev:
            "Personal transition, resistance to change, unfinished business.",
        interp: "You are moving away from a portfolio of losing stocks into a calmer, more hopeful set of investments. This is a necessary transition, even if it is accompanied by the sadness of realizing losses. You are leaving your troubles behind.",
        interpRev:
            "You are resisting a necessary portfolio transition, clinging to the baggage of losing stocks. There is unfinished business (like selling a loser) that is preventing you from moving on. The journey ahead feels uncertain.",
    },
    {
        name: "VII of Swords",
        core: "Betrayal, deception, getting away with something, stealth.",
        coreRev: "Imposter syndrome, deceiving yourself, keeping secrets.",
        interp: "This card warns of deception, such as accounting fraud or insider trading. Someone may be acting behind the scenes to manipulate a stock, or you may be trying to get away with a risky, unethical trade. This path is dangerous.",
        interpRev:
            "You are deceiving yourself about a stock's true potential or are suffering from imposter syndrome regarding your trading abilities. Keeping your losses a secret is taking a toll. It's time to be honest with yourself and your strategy.",
    },
    {
        name: "VIII of Swords",
        core: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality.",
        coreRev: "Self-belief, new perspectives, release, freedom.",
        interp: "You feel trapped and powerless in a losing position, but the restrictions are self-imposed by your own negative thoughts and beliefs. You have the power to free your capital by simply hitting the 'sell' button. You are not as helpless as you think.",
        interpRev:
            "You are beginning to challenge your limiting beliefs about a stock and see a way out of your perceived prison. A new perspective is bringing you a sense of freedom and release. You are reclaiming your financial power.",
    },
    {
        name: "IX of Swords",
        core: "Anxiety, worry, fear, depression, nightmares.",
        coreRev: "Inner turmoil, deep-seated fears, secrets, releasing worry.",
        interp: "This is the 'nightmare' card, representing deep anxiety, fear, and worry about your portfolio that keeps you up at night. These fears of a market crash are often exaggerated by your mind. It is time to talk about what is troubling you.",
        interpRev:
            "You are beginning to confront the deep-seated fears (like fear of ruin) that have been tormenting your trading decisions. Releasing these worries is a difficult but necessary process. The darkest hour of market panic is just before the dawn.",
    },
    {
        name: "X of Swords",
        core: "Painful endings, deep wounds, betrayal, loss, crisis.",
        coreRev: "Recovery, regeneration, resisting an end, forgiveness.",
        interp: "You have hit rock bottom after a painful ending, like a stock going to zero or a portfolio wipeout. While this is a moment of crisis and deep financial wounds, it also signifies that the worst is over. There is nowhere to go but up from here.",
        interpRev:
            "The process of recovery and financial regeneration has begun after a devastating loss. You are slowly healing your portfolio. However, resisting this final ending (by not selling the dead asset) will only prolong the pain.",
    },
    {
        name: "Page of Swords",
        core: "New ideas, curiosity, thirst for knowledge, new ways of communicating.",
        coreRev:
            "Self-expression, all talk and no action, haste, misinformation.",
        interp: "You are full of new ideas and a thirst for financial knowledge. This card encourages you to ask questions, learn new analysis techniques, and communicate your stock ideas with energy and enthusiasm. Be curious and explore.",
        interpRev:
            "You may be all talk and no action—doing endless research but never making a trade. Or, you are spreading market misinformation without fact-checking. Haste in communication could lead to misunderstandings.",
    },
    {
        name: "Knight of Swords",
        core: "Ambitious, action-oriented, fast-thinking, direct.",
        coreRev: "Restless, unfocused, impulsive, burn-out, aggressive.",
        interp: "This Knight is on a mission, like an ambitious day-trader charging forward with intellectual clarity. It's time for swift, decisive action based on a well-thought-out plan. Be direct and assertive in executing your trades.",
        interpRev:
            "Your energy is scattered, leading to impulsive and reckless trading. You are charging ahead without a clear plan, which could lead to burnout or severe losses. Your directness may be perceived as aggressive FOMO.",
    },
    {
        name: "Queen of Swords",
        core: "Independent, unbiased judgement, clear boundaries, direct communication.",
        coreRev: "Overly-emotional, easily influenced, bitchy, cold-hearted.",
        interp: "You possess sharp intellect and can make unbiased judgements about stocks based on facts and data. This card represents an independent investor with clear boundaries and a direct, honest strategy. You cut through the noise to find the truth.",
        interpRev:
            "Your investment judgment is clouded by emotion, or you are being cold-hearted and cruel with your financial decisions. You may be easily influenced by the opinions of market gurus. Find the balance between head and heart.",
    },
    {
        name: "King of Swords",
        core: "Mental clarity, intellectual power, authority, truth.",
        coreRev: "Quiet power, inner truth, misuse of power, manipulation.",
        interp: "You are an authority figure who rules with intellectual power and clarity, like a successful fund manager. Your decisions are based on logic, truth, and ethical judgment. You are a master of market analysis, commanding respect.",
        interpRev:
            "You are misusing your intellectual power for market manipulation or selfish gain. Your commentary may be cutting and tyrannical. It is time to reconnect with your inner truth and use your financial authority wisely.",
    },
    {
        name: "Ace of Wands",
        core: "Inspiration, new opportunities, growth, potential.",
        coreRev: "An emerging idea, lack of direction, delays, hesitation.",
        interp: "A spark of inspiration has arrived, bringing with it a new opportunity for a high-growth investment. This is a moment of pure potential and a call to action. Seize this new passion for a stock and run with it.",
        interpRev:
            "You have a new investment idea, but you are hesitating to act on it due to a lack of direction or funding delays. Your passion is being stifled. It's time to overcome your hesitation and give your idea a chance to grow.",
    },
    {
        name: "II of Wands",
        core: "Future planning, progress, decisions, discovery.",
        coreRev: "Fear of unknown, lack of planning, personal goals.",
        interp: "You have made progress and are now planning your next moves in the market. This card is about looking to the future and making bold decisions about your portfolio's path, perhaps by expanding into international markets.",
        interpRev:
            "Fear of the unknown is preventing you from investing or expanding your portfolio. A lack of a clear financial plan is holding you back. It's time to focus on your long-term goals and take that first step.",
    },
    {
        name: "III of Wands",
        core: "Progress, expansion, foresight, overseas opportunities.",
        coreRev: "Playing small, lack of foresight, unexpected delays.",
        interp: "Your investment plans are in motion, and you are starting to see the first signs of success. This card encourages you to think bigger and look for opportunities for expansion, possibly in overseas markets. Your foresight is paying off.",
        interpRev:
            "You are playing too small with your investments and not living up to your portfolio's full potential. Unexpected delays or a lack of foresight are frustrating your progress. It's time to think about long-term growth.",
    },
    {
        name: "IV of Wands",
        core: "Celebration, joy, harmony, relaxation, homecoming.",
        coreRev: "Personal celebration, inner harmony, conflict with others.",
        interp: "This card signifies a time of joyful celebration of a financial milestone, like reaching an investment goal. Your portfolio is in a state of harmony and stability. Relax and enjoy the fruits of your labor.",
        interpRev:
            "There is a lack of harmony in your financial life, possibly due to conflict with an investment partner. You may be celebrating a personal trading achievement alone. It's important to find your own inner sense of stability and peace.",
    },
    {
        name: "V of Wands",
        core: "Conflict, disagreements, competition, tension.",
        coreRev: "Conflict avoidance, diversity, releasing tension.",
        interp: "You are in the midst of market conflict, competition, and high volatility. While there is tension, it can be a source of creative energy and growth as different market ideas battle it out. It's time to stand up for your investment thesis.",
        interpRev:
            "You are avoiding a necessary portfolio change, which is only making the underlying tension worse. It's time to find a way to work with diverse market opinions rather than against them. Releasing underperforming assets is crucial.",
    },
    {
        name: "VI of Wands",
        core: "Public recognition, victory, success, self-confidence.",
        coreRev: "Private achievement, fall from grace, egotism.",
        interp: "You have achieved a significant victory, and your successful stock pick is receiving public recognition. This is a moment of success, pride, and well-deserved acclaim. Your self-confidence as an investor is at a high point.",
        interpRev:
            "Your investment success has not been publicly acknowledged, or you are celebrating a private trading win. Be wary of egotism and a potential fall from grace. True confidence comes from your strategy, not from external praise.",
    },
    {
        name: "VII of Wands",
        core: "Challenge, competition, perseverance, standing up for beliefs.",
        coreRev: "Giving up, overwhelmed, overly defensive, yielding.",
        interp: "Your portfolio is being challenged by market headwinds, but you are in a position of strength. It is time to stand your ground, defend your investment thesis, and persevere against the competition. Don't back down from this fight.",
        interpRev:
            "You are feeling overwhelmed by market pressure and are on the verge of giving up and selling your position. You may be overly defensive or are yielding your position too easily. Re-evaluate your strategy and find your courage.",
    },
    {
        name: "VIII of Wands",
        core: "Rapid action, movement, quick decisions, air travel.",
        coreRev: "Delays, frustration, resisting change, slowing down.",
        interp: "Things are moving forward at a rapid pace in the market. This card signifies swift price action, important news breaking, and a need for quick decisions. Be prepared to go with the flow of this powerful market energy.",
        interpRev:
            "You are experiencing frustrating delays in your trades or in a corporate action. You may be resisting a necessary, rapid change in the market, which is only slowing you down. It's time to be patient and wait for the right moment to act.",
    },
    {
        name: "IX of Wands",
        core: "Resilience, courage, persistence, test of faith, boundaries.",
        coreRev: "Inner resources, struggle, overwhelm, defensive, paranoia.",
        interp: "You have been through many market battles and are weary, but you still have the resilience to face one final challenge. This is a test of your faith in your strategy. Guard your positions and don't give up now; you are so close to your goal.",
        interpRev:
            "You are feeling overwhelmed by market volatility and on the verge of collapse, struggling to find the strength to hold on. Your defensiveness may be bordering on paranoia. You must dig deep and tap into your inner resources.",
    },
    {
        name: "X of Wands",
        core: "Burden, extra responsibility, hard work, stress, completion.",
        coreRev: "Delegating, release, carrying the burden, letting go.",
        interp: "You have taken on too much risk or responsibility in your portfolio and are carrying a heavy burden. While this may signify the completion of a long, hard investment cycle, it comes with a great deal of stress. You are nearing the end.",
        interpRev:
            "You are learning to delegate (perhaps to a financial advisor) and release the burdens you've been carrying. It's time to let go of underperforming assets. Acknowledging that you can't manage it all is the first step to relief.",
    },
    {
        name: "Page of Wands",
        core: "Enthusiasm, exploration, discovery, free spirit.",
        coreRev: "Lack of direction, procrastination, creating conflict.",
        interp: "A free-spirited energy of enthusiasm for a new investment is here. This card encourages you to discover new passions and embrace your creative spark in the market. Be open to new adventures and a sense of wonder.",
        interpRev:
            "You are full of creative investment energy but lack the direction to use it effectively, leading to procrastination. You might be stirring up conflict in investment forums out of boredom. It's time to find a focus for your passion.",
    },
    {
        name: "Knight of Wands",
        core: "Energy, passion, lust, action, adventure, impulsiveness.",
        coreRev: "Haste, scattered energy, frustration, delays.",
        interp: "This Knight brings a wave of passionate energy and action. It's time to pursue your investment goals with vigor and enthusiasm, but be mindful of impulsiveness. An adventurous, high-risk trade is on the horizon.",
        interpRev:
            "Your impulsive trading energy is scattered, leading to frustration and delays. You are acting with haste and without a clear plan, likely chasing trends. It's time to slow down and channel your passion more effectively.",
    },
    {
        name: "Queen of Wands",
        core: "Courage, confidence, independence, social butterfly, determination.",
        coreRev: "Self-respect, self-confidence, introverted, a burnout.",
        interp: "You are a confident, courageous, and determined investor with a vibrant social network. This Queen encourages you to be independent and shine your light brightly. Your passion and optimism are inspiring to other investors.",
        interpRev:
            "You are feeling insecure or have lost your confidence in your trading, perhaps due to burnout. It may be a time for introversion and focusing on rebuilding your self-respect. Your inner fire for the market needs to be rekindled.",
    },
    {
        name: "King of Wands",
        core: "Natural-born leader, vision, entrepreneur, honour.",
        coreRev: "Impulsiveness, haste, ruthless, high expectations.",
        interp: "You are a visionary investor, like a venture capitalist, who inspires others to follow your lead. This King has the creativity and determination to turn a vision into a profitable reality. It is time to take charge of your financial future.",
        interpRev:
            "Your investment style has become ruthless, or your expectations for returns are unrealistic. Impulsive and hasty decisions are leading to poor outcomes. You must lead your portfolio with more consideration and less force.",
    },
    {
        name: "Ace of Pentacles",
        core: "New financial or career opportunity, manifestation, prosperity.",
        coreRev: "Lost opportunity, lack of planning, greed, missed chance.",
        interp: "A seed of prosperity has been planted, offering a new, tangible opportunity for financial growth or a solid investment. This is a time for manifestation and building a secure future. Ground your ambitions in solid assets.",
        interpRev:
            "You have missed a valuable investment opportunity due to a lack of planning or foresight. Be wary of making decisions based on greed. It is not too late to create a new plan for future success.",
    },
    {
        name: "II of Pentacles",
        core: "Multiple priorities, time management, adaptability, balance.",
        coreRev: "Over-committed, disorganisation, reprioritising.",
        interp: "You are juggling multiple positions and need to manage your time and capital effectively. This card calls for adaptability and finding balance in a volatile market. Stay flexible to keep all your investments in play.",
        interpRev:
            "You are over-committed and your portfolio feels disorganized, causing you to drop the ball. It's time to re-prioritize your holdings and focus on what is truly important. You cannot effectively manage everything at once.",
    },
    {
        name: "III of Pentacles",
        core: "Teamwork, collaboration, learning, implementation.",
        coreRev:
            "Disharmony, misalignment, working alone, lack of collaboration.",
        interp: "This card signifies successful collaboration, perhaps with an investment club or financial advisor. By combining your skills with others, you can create something of high quality and lasting value. It is also a time for learning your craft.",
        interpRev:
            "There is disharmony and a lack of collaboration with your financial team, hindering progress. You may feel that you have to do everything yourself. Misalignment of financial goals is causing friction.",
    },
    {
        name: "IV of Pentacles",
        core: "Saving money, security, control, conservatism, scarcity mindset.",
        coreRev: "Over-spending, greed, self-protection, releasing control.",
        interp: "You are holding on tightly to your cash or a 'safe' stock out of a need for security. While saving is wise, be careful of a scarcity mindset that prevents you from investing for growth. You may be too resistant to change.",
        interpRev:
            "You are releasing your tight grip on control, which can be both liberating and terrifying. This may manifest as over-spending, or finally selling a long-held stock to free up capital. Letting go is a necessary step for growth.",
    },
    {
        name: "V of Pentacles",
        core: "Financial loss, poverty, isolation, worry, insecurity.",
        coreRev: "Recovery from financial loss, spiritual poverty.",
        interp: "You are experiencing a period of financial hardship, worry, and portfolio loss. You feel left out in the cold by the market, but help is often closer than you think. Don't be afraid to ask for support or re-evaluate your strategy.",
        interpRev:
            "You are beginning to recover from a period of financial loss and instability. The worst is behind you, and you are finding your way back to security. This card can also point to a poverty of spirit that needs healing.",
    },
    {
        name: "VI of Pentacles",
        core: "Giving, receiving, sharing wealth, generosity, charity.",
        coreRev:
            "Self-care, unpaid debts, one-sided charity, strings attached.",
        interp: "This card represents a harmonious flow of giving and receiving. It can signify receiving dividends, or being in a position to be generous. A balanced portfolio with a healthy give-and-take of risk and reward.",
        interpRev:
            "The balance of giving and receiving is off. You may be in a stock that only takes and never gives back, or an investment may come with strings attached. Be wary of unpaid debts, like margin calls.",
    },
    {
        name: "VII of Pentacles",
        core: "Long-term view, sustainable results, perseverance, investment.",
        coreRev: "Lack of long-term vision, limited success or reward.",
        interp: "You are taking a moment to assess the progress of your long-term investments. Your hard work in researching and holding is beginning to pay off, but patience is still required. Continue to persevere for sustainable results.",
        interpRev:
            "Your long-term investments are not yielding the results you hoped for, perhaps due to a lack of a clear vision. You may be frustrated with limited success. It's time to re-evaluate your long-term strategy.",
    },
    {
        name: "VIII of Pentacles",
        core: "Apprenticeship, repetitive tasks, mastery, skill development.",
        coreRev: "Self-development, perfectionism, misdirected activity.",
        interp: "You are diligently working on developing your investment skills and mastering your craft. This card celebrates the focus and dedication required to become an expert analyst or trader. Your hard work will lead to high-quality results.",
        interpRev:
            "You are working hard, but your efforts may be misdirected on the wrong stocks or strategies. Perfectionism could be hindering you from making any trades at all. It's a good time to focus on your own self-development.",
    },
    {
        name: "IX of Pentacles",
        core: "Abundance, luxury, self-sufficiency, financial independence.",
        coreRev: "Self-worth, over-working, financial dependency.",
        interp: "You have worked hard to achieve a level of financial independence and can now enjoy the fruits of your labor. This card signifies luxury, self-sufficiency, and enjoying the abundance your successful investments provide.",
        interpRev:
            "You may be working so hard on your portfolio that you have no time to enjoy your success, or you may be financially dependent on a single volatile stock. Your self-worth is not tied to your account balance.",
    },
    {
        name: "X of Pentacles",
        core: "Wealth, financial security, family, long-term success, contribution.",
        coreRev: "Financial failure or loss, loneliness, instability.",
        interp: "This card represents the ultimate in long-term success, financial security, and building a lasting legacy. You have built a portfolio of enduring value for your family and future. Your wealth is stable and established.",
        interpRev:
            "You are facing financial instability or the loss of a family legacy investment. There is a breakdown in the long-term structures you relied upon. This may be a time of portfolio insecurity and a threat to your wealth.",
    },
    {
        name: "Page of Pentacles",
        core: "Manifestation, financial opportunity, skill development.",
        coreRev: "Lack of progress, procrastination, learn from failure.",
        interp: "A new opportunity to manifest your financial goals is presenting itself. This card encourages you to be diligent and grounded in your approach to learning new investment skills. Your ambition is a seed ready to be planted.",
        interpRev:
            "You are experiencing a lack of progress in your financial goals due to procrastination or a fear of failure. It is important to learn from your losing trades and not let them stop you. A new plan is needed to get things moving.",
    },
    {
        name: "Knight of Pentacles",
        core: "Hard work, productivity, routine, conservatism.",
        coreRev: "Self-discipline, boredom, feeling 'stuck', laziness.",
        interp: "This Knight is a diligent, reliable, and committed investor. It's time to stick to your routine (like dollar-cost averaging) and work methodically towards your goals. This conservative approach guarantees steady progress.",
        interpRev:
            "You are feeling bored and stuck in a rut with your portfolio; your routine has become a cage. A lack of self-discipline may be leading to laziness in your research. It's time to shake things up while maintaining your commitment.",
    },
    {
        name: "Queen of Pentacles",
        core: "Nurturing, practical, providing financially, a working parent.",
        coreRev: "Financial independence, self-care, work-home conflict.",
        interp: "You are a nurturing and practical provider, able to create a warm and secure financial environment for yourself and others. This Queen balances growing wealth with managing risk with grace. You are down-to-earth and generous.",
        interpRev:
            "There is a conflict between your day job and managing your portfolio, leaving you feeling drained. It's crucial to practice self-care and not neglect your own financial needs. You may be striving for more financial independence.",
    },
    {
        name: "King of Pentacles",
        core: "Wealth, business, leadership, security, discipline.",
        coreRev: "Financially inept, obsessed with wealth, stubbornness.",
        interp: "You have reached the pinnacle of material success through discipline and sound business acumen. As an investor, you create abundance and security. Your financial empire is stable and prosperous.",
        interpRev:
            "You are obsessed with wealth and status, or you are being financially irresponsible and inept. Your stubbornness is preventing you from selling a losing asset. A leader's success is measured by more than just their bank account.",
    },
];
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const tableBody = document.getElementById("tableBody");
    const cardDetailsContainer = document.getElementById(
        "card-details-container"
    );

    function populateTable(data) {
        tableBody.innerHTML = "";
        if (data.length === 0) {
            tableBody.innerHTML =
                '<tr><td colspan="5" style="text-align:center; padding: 40px; color: #777;">No cards match your search.</td></tr>';
            return;
        }

        data.forEach((card) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${card.name}</td>
                <td>${card.core}</td>
                <td>${card.coreRev}</td>
                <td>${card.interp}</td>
                <td>${card.interpRev}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    function populateCardDetails(data) {
        cardDetailsContainer.innerHTML = "";
        if (data.length === 0) {
            return;
        }

        if (data.length > 0) {
            const copyButton = document.createElement("button");
            copyButton.textContent = "Copy to Clipboard";
            copyButton.classList.add("copy-btn");
            cardDetailsContainer.appendChild(copyButton);
        }

        data.forEach((card, index) => {
            const detailDiv = document.createElement("div");
            detailDiv.classList.add("card-detail");
            detailDiv.dataset.cardName = card.name;
            detailDiv.innerHTML = `
                <h3>${index + 1}. ${card.name}</h3>
                <p><strong>Meaning:</strong> ${card.core}</p>
                <p><strong>Stock:</strong> ${card.interp}</p>
            `;
            cardDetailsContainer.appendChild(detailDiv);
        });

        if (data.length > 0) {
            const copyButton = document.createElement("button");
            copyButton.textContent = "Copy to Clipboard";
            copyButton.classList.add("copy-btn");
            cardDetailsContainer.appendChild(copyButton);
        }
    }

    function filterData() {
        const query = searchInput.value.toLowerCase().trim();

        if (!query) {
            populateTable(tarotData);
            populateCardDetails(tarotData);
            return;
        }

        const searchTerms = query
            .split(",")
            .map((term) => term.trim())
            .filter((term) => term.length > 0);

        if (searchTerms.length === 0) {
            populateTable(tarotData);
            populateCardDetails(tarotData);
            return;
        }

        const filteredData = [];
        const addedCardNames = new Set();

        searchTerms.forEach((term) => {
            const foundCard = tarotData.find((card) => {
                if (addedCardNames.has(card.name)) {
                    return false;
                }

                const cardNameLower = card.name.toLowerCase();
                const termWords = term.split(/\s+/).filter((w) => w.length > 0);

                if (termWords.length === 0) return false;

                return termWords.every((word) => {
                    const isRoman = /^[ivx]+$/.test(word);
                    if (isRoman) {
                        const regex = new RegExp("\\b" + word + "\\b");
                        return regex.test(cardNameLower);
                    } else {
                        return cardNameLower.includes(word);
                    }
                });
            });

            if (foundCard) {
                filteredData.push(foundCard);
                addedCardNames.add(foundCard.name);
            }
        });

        populateTable(filteredData);
        populateCardDetails(filteredData);
    }

    cardDetailsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("copy-btn")) {
            const details =
                cardDetailsContainer.querySelectorAll(".card-detail");
            const cardNames = Array.from(details).map(
                (detail) => detail.dataset.cardName
            );
            const searchQuery = cardNames.join(", ");

            let textToCopy = `${searchQuery}\n\n`;

            details.forEach((detail) => {
                const title = detail.querySelector("h3").textContent.trim();
                const meaningHTML = detail.querySelector(
                    "p:nth-of-type(1)"
                ).innerHTML;
                const stockHTML = detail.querySelector(
                    "p:nth-of-type(2)"
                ).innerHTML;

                const meaning = meaningHTML
                    .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
                    .trim();
                const stock = stockHTML
                    .replace(/<strong>(.*?)<\/strong>/g, "**$1**")
                    .trim();
                textToCopy += `${title}\n${meaning}\n${stock}\n\n`;
            });

            navigator.clipboard.writeText(textToCopy.trim()).then(() => {
                const originalText = e.target.textContent;
                e.target.textContent = "Copied!";
                setTimeout(() => {
                    e.target.textContent = originalText;
                }, 2000);
            });
            return;
        }

        const cardDetailDiv = e.target.closest(".card-detail");
        if (!cardDetailDiv) return;

        const cardName = cardDetailDiv.dataset.cardName;
        const card = tarotData.find((c) => c.name === cardName);
        const h3 = cardDetailDiv.querySelector("h3");
        const isReversed = h3.textContent.includes("(Reversed)");

        if (isReversed) {
            const originalName = h3.textContent
                .replace(" (Reversed)", "")
                .split(". ")[1];
            h3.innerHTML = `${Array.from(
                cardDetailDiv.parentNode.children
            ).indexOf(cardDetailDiv)}. ${originalName}`;
            cardDetailDiv.querySelector(
                "p:nth-of-type(1)"
            ).innerHTML = `<strong>Meaning:</strong> ${card.core}`;
            cardDetailDiv.querySelector(
                "p:nth-of-type(2)"
            ).innerHTML = `<strong>Stock:</strong> ${card.interp}`;
        } else {
            h3.textContent += " (Reversed)";
            cardDetailDiv.querySelector(
                "p:nth-of-type(1)"
            ).innerHTML = `<strong>Meaning:</strong> ${card.coreRev}`;
            cardDetailDiv.querySelector(
                "p:nth-of-type(2)"
            ).innerHTML = `<strong>Stock:</strong> ${card.interpRev}`;
        }
    });

    searchInput.addEventListener("input", filterData);

    populateTable(tarotData);
    populateCardDetails(tarotData);
});
