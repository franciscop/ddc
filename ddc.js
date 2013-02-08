  /* OPTIONS */
  /* Set to 1 if you want the 3rd drop down menu to submit form automatically */
  var redirect=0;

  /*  Set all the variables to NULL as default */
  function nullOptionsTMA(aMenu)
    {
    var tot=aMenu.options.length;
    for (i=0;i<tot;i++)
      {
      aMenu.options[i]=null;
      }
    aMenu.options.length=0;
    }

  /*  Redirect module */
  function goTMA(aMenu)
    {
    if (aMenu.options.value!="" && redirect==1)
      {
      location=aMenu.options[aMenu.selectedIndex].value;
      }
    }

  /*  IE. Does it work? */
  function msDDC()
    {
    if (navigator.appName.indexOf("Microsoft")>-1)
      {
      document.formDDC.classesDDC.options[0].selected=true;
      document.formDDC.divisionsDDC.options[0].selected=true;
      document.formDDC.sectionsDDC.options[0].selected=true;
      }
    }
  /*  END OF SETUP */

  /*  START OF DIVISION DEFINITIONS */
  /*  Class 0. Computer science, information & general works */
  function Class_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Computer science, knowledge & systems","");
      options[2]=new Option("1. Bibliographies","");
      options[3]=new Option("2. Library & information sciences","");
      options[4]=new Option("3. Encyclopedias & books of facts","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. Magazines, journals & serials","5");
      options[7]=new Option("6. Associations, organizations & museums","6");
      options[8]=new Option("7. News media, journalism & publishing","7");
      options[9]=new Option("8. General collections","8");
      options[10]=new Option("9. Manuscripts & rare books","9");
      options[0].selected=true
      }
    }

  /*  Class 1. Philosophy and psychology */
  function Class_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Philosophy","0");
      options[2]=new Option("1. Metaphysics","1");
      options[3]=new Option("2. Epistemology","2");
      options[4]=new Option("3. Parapsychology and occultism","3");
      options[5]=new Option("4. Philosophical schools of thought","4");
      options[6]=new Option("5. Psychology","5");
      options[7]=new Option("6. Logic","6");
      options[8]=new Option("7. Ethics","7");
      options[9]=new Option("8. Ancient, medieval, and Eastern philosophy","8");
      options[10]=new Option("9. Modern Western philosophy","9");
      }
    }

  /*  Class 2. Religion */
  function Class_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Religion","0");
      options[2]=new Option("1. Natural theology","1");
      options[3]=new Option("2. Bible","2");
      options[4]=new Option("3. Christian theology","3");
      options[5]=new Option("4. Christian moral & devotional theology","4");
      options[6]=new Option("5. Christian orders & local church","5");
      options[7]=new Option("6. Christian social theology","6");
      options[8]=new Option("7. Christian church history","7");
      options[9]=new Option("8. Christian denominations & sects","8");
      options[10]=new Option("9. Other & comparative religions","9");
      }
    }

  /*  Class 3. Social sciences */
  function Class_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Social sciences, sociology & anthropology","0");
      options[2]=new Option("1. General statistics","1");
      options[3]=new Option("2. Political science","2");
      options[4]=new Option("3. Economics","3");
      options[5]=new Option("4. Law","4");
      options[6]=new Option("5. Public administration","5");
      options[7]=new Option("6. Social services; association","6");
      options[8]=new Option("7. Education","7");
      options[9]=new Option("8. Commerce, communications, transport","8");
      options[10]=new Option("9. Customs, etiquette, folklore","9");
      }
    }

  /*  Class 4. Language */
  function Class_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Language","0");
      options[2]=new Option("1. Linguistics","1");
      options[3]=new Option("2. English & Old English","2");
      options[4]=new Option("3. Germanic languages; German","3");
      options[5]=new Option("4. Romance languages; French","4");
      options[6]=new Option("5. Italian, Romanian, Rhaeto-Romanic","5");
      options[7]=new Option("6. Spanish & Portuguese languages","6");
      options[8]=new Option("7. Italic languages; Latin","7");
      options[9]=new Option("8. Hellenic languages; Classical Greek","8");
      options[10]=new Option("9. Other languages","9");
      }
    }

  /*  Class 5. Science */
  function Class_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Sciences","0");
      options[2]=new Option("1. Mathematics","1");
      options[3]=new Option("2. Astronomy & allied sciences","2");
      options[4]=new Option("3. Physics","3");
      options[5]=new Option("4. Chemistry & allied sciences","4");
      options[6]=new Option("5. Earth sciences","5");
      options[7]=new Option("6. Paleontology; Paleozoology","6");
      options[8]=new Option("7. Life sciences","7");
      options[9]=new Option("8. Plants","8");
      options[10]=new Option("9. Zoological sciences/Animals","9");
      }
    }

  /*  Class 6. Technology */
  function Class_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Technology","0");
      options[2]=new Option("1. Medical sciences; Medicine","1");
      options[3]=new Option("2. Engineering & Applied operations","2");
      options[4]=new Option("3. Agriculture","3");
      options[5]=new Option("4. Home economics & family living","4");
      options[6]=new Option("5. Management & auxiliary services","5");
      options[7]=new Option("6. Chemical engineering","6");
      options[8]=new Option("7. Manufacturing","7");
      options[9]=new Option("8. Manufacture for specific uses","8");
      options[10]=new Option("9. Buildings","9");
      }
    }

  /*  Class 7. Arts */
  function Class_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Arts","0");
      options[2]=new Option("1. Civic & landscape art","1");
      options[3]=new Option("2. Architecture","2");
      options[4]=new Option("3. Plastic arts; Sculpture","3");
      options[5]=new Option("4. Drawing & decorative arts","4");
      options[6]=new Option("5. Painting & paintings","5");
      options[7]=new Option("6. Graphic arts; Printmaking & prints","6");
      options[8]=new Option("7. Photography & photographs","7");
      options[9]=new Option("8. Music","8");
      options[10]=new Option("9. Recreational & performing arts","9");
      }
    }

  /*  Class 8. Literature */
  function Class_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. Literature, rhetoric & criticism","0");
      options[2]=new Option("1. American literature in English","1");
      options[3]=new Option("2. English & Old English literatures","2");
      options[4]=new Option("3. German & related literatures","3");
      options[5]=new Option("4. Literatures of Romance languages","4");
      options[6]=new Option("5. Italian, Romanian, Rhaeto-Romanic","5");
      options[7]=new Option("6. Spanish & Portuguese literatures","6");
      options[8]=new Option("7. Italic literatures; Latin literature","7");
      options[9]=new Option("8. Hellenic literatures; Classical Greek","8");
      options[10]=new Option("9. Literatures of other languages","9");
      }
    }

  /*  Class 9. History, geography & biography */
  function Class_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      options[0]=new Option("Choose a division","");
      options[1]=new Option("0. History","0");
      options[2]=new Option("1. Geography & travel","1");
      options[3]=new Option("2. Biography, genealogy, insignia","2");
      options[4]=new Option("3. History of ancient world","3");
      options[5]=new Option("4. General history of Europe","4");
      options[6]=new Option("5. General history of Asia; Far East","5");
      options[7]=new Option("6. General history of Africa","6");
      options[8]=new Option("7. General history of North America","7");
      options[9]=new Option("8. General history of South America","8");
      options[10]=new Option("9. General history of other areas","9");
      }
    }
  /* /*  END OF DIVISION DEFINITIONS */


  /* /*  START OF SECTION DEFINITIONS */
  /*  Division 00 */
  function Division_0_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
      /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Computer science, knowledge & general works","0");
      options[2]=new Option("1. Knowledge","1");
      options[3]=new Option("2. The book (i.e. Meta writings about books)","2");
      options[4]=new Option("3. Systems","3");
      options[5]=new Option("4. Data processing & computer science","4");
      options[6]=new Option("5. Computer programming, programs & data","5");
      options[7]=new Option("6. Special computer methods","6");
      }
    }

  /*  Division 01 */
  function Division_0_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Bibliography","0");
      options[2]=new Option("1. Bibliographies","1");
      options[3]=new Option("2. Bibliographies of individuals","2");
      options[4]=new Option("3. [Unassigned]","un");
      options[5]=new Option("4. Of anonymous & pseudonymous works","4");
      options[6]=new Option("5. Bibliographies of works from specific places","5");
      options[7]=new Option("6. Bibliographies of works on specific subjects","6");
      options[8]=new Option("7. General subject catalogs","7");
      options[9]=new Option("8. Catalogs arranged by author, date, etc.","8");
      options[10]=new Option("9. Dictionary catalogs","9");
      }
    }

  /*  Division 02 */
  function Division_0_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Library & information sciences","0");
      options[2]=new Option("1. Library relationships","1");
      options[3]=new Option("2. Administration of physical plant","2");
      options[4]=new Option("3. Personnel management","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. Library operations","5");
      options[7]=new Option("6. Libraries for specific subjects","6");
      options[8]=new Option("7. General libraries","7");
      options[9]=new Option("8. Reading & use of other information media","8");
      options[10]=new Option("9. [Unassigned]","un");
      }
    }

  /*  Division 03 */
  function Division_0_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General encyclopedic works","0");
      options[2]=new Option("1. Encyclopedias in American English","1");
      options[3]=new Option("2. Encyclopedias in English","2");
      options[4]=new Option("3. In other Germanic languages","3");
      options[5]=new Option("4. Encyclopedias in French, Occitan & Catalan","4");
      options[6]=new Option("5. In Italian, Romanian & related languages","5");
      options[7]=new Option("6. Encyclopedias in Spanish & Portuguese","6");
      options[8]=new Option("7. Encyclopedias in Slavic languages","7");
      options[9]=new Option("8. Encyclopedias in Scandinavian languages","8");
      options[10]=new Option("9. Encyclopedias in other languages","9");
      }
    }

  /*  Division 04 is [Unassigned] */
  function Division_0_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose another divisioon","");
      }
    }

  /*  Division 05 */
  function Division_0_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General serial publications","0");
      options[2]=new Option("1. Serials in American English","1");
      options[3]=new Option("2. Serials in English","2");
      options[4]=new Option("3. Serials in other Germanic languages","3");
      options[5]=new Option("4. Serials in French, Occitan & Catalan","4");
      options[6]=new Option("5. In Italian, Romanian & related languages","5");
      options[7]=new Option("6. Serials in Spanish & Portuguese","6");
      options[8]=new Option("7. Serials in Slavic languages","7");
      options[9]=new Option("8. Serials in Scandinavian languages","8");
      options[10]=new Option("9. Serials in other languages","9");
      }
    }

  /*  Division 06 */
  function Division_0_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General organizations & museology","0");
      options[2]=new Option("1. Organizations in North America","1");
      options[3]=new Option("2. Organizations in British Isles; in England","2");
      options[4]=new Option("3. Organizations in central Europe; in Germany","3");
      options[5]=new Option("4. Organizations in France & Monaco","4");
      options[6]=new Option("5. Organizations in Italy & adjacent islands","5");
      options[7]=new Option("6. In Iberian Peninsula & adjacent islands","6");
      options[8]=new Option("7. Organizations in eastern Europe; in Russia","7");
      options[9]=new Option("8. Organizations in other geographic areas","8");
      options[10]=new Option("9. Museum science","9");
      }
    }

  /*  Division 07 */
  function Division_0_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. News media, journalism & publishing","0");
      options[2]=new Option("1. Newspapers in North America","1");
      options[3]=new Option("2. Newspapers in British Isles; in England","2");
      options[4]=new Option("3. Newspapers in central Europe; in Germany","3");
      options[5]=new Option("4. Newspapers in France & Monaco","4");
      options[6]=new Option("5. Newspapers in Italy & adjacent islands","5");
      options[7]=new Option("6. In Iberian Peninsula & adjacent islands","6");
      options[8]=new Option("7. Newspapers in eastern Europe; in Russia","7");
      options[9]=new Option("8. Newspapers in Scandinavia","8");
      options[10]=new Option("9. Newspapers in other geographic areas","9");
      }
    }

  /*  Division 08 */
  function Division_0_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General collections","0");
      options[2]=new Option("1. Collections in American English","1");
      options[3]=new Option("2. Collections in English","2");
      options[4]=new Option("3. Collections in other Germanic languages","3");
      options[5]=new Option("4. Collections in French, Occitan & Catalan","4");
      options[6]=new Option("5. In Italian, Romanian & related languages","5");
      options[7]=new Option("6. Collections in Spanish & Portuguese","6");
      options[8]=new Option("7. Collections in Slavic languages","7");
      options[9]=new Option("8. Collections in Scandinavian languages","8");
      options[10]=new Option("9. Collections in other languages","9");
      }
    }

  /*  Division 09 */
  function Division_0_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Manuscripts & rare books","0");
      options[2]=new Option("1. Manuscripts","1");
      options[3]=new Option("2. Block books","2");
      options[4]=new Option("3. Incunabula","3");
      options[5]=new Option("4. Printed books","4");
      options[6]=new Option("5. Books notable for bindings","5");
      options[7]=new Option("6. Books notable for illustrations","6");
      options[8]=new Option("7. Books notable for ownership or origin","7");
      options[9]=new Option("8. Prohibited works, forgeries & hoaxes","8");
      options[10]=new Option("9. Books notable for format","9");
      }
    }

  /*  Division 10 */
  function Division_1_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Philosophy and psychology","0");
      options[2]=new Option("1. Theory of philosophy","1");
      options[3]=new Option("2. Miscellany of philosophy","2");
      options[4]=new Option("3. Dictionaries and encyclopedias of philosophy","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. Serial publications of philosophy","5");
      options[7]=new Option("6. Organizations and management of philosophy","6");
      options[8]=new Option("7. Education, research, and related topics of philosophy","7");
      options[9]=new Option("8. Kinds of persons treatment of philosophy","8");
      options[10]=new Option("9. Historical and collected persons treatment of philosophy","9");
      }
    }

  /*  Division 11 */
  function Division_1_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Metaphysics","0");
      options[2]=new Option("1. Ontology","1");
      options[3]=new Option("2. [Unassigned]","un");
      options[4]=new Option("3. Cosmology (Philosophy of nature)","3");
      options[5]=new Option("4. Space","4");
      options[6]=new Option("5. Time","5");
      options[7]=new Option("6. Change","6");
      options[8]=new Option("7. Structure","7");
      options[9]=new Option("8. Force and energy","8");
      options[10]=new Option("9. Number and quantity","9");
      }
    }

  /*  Division 12 */
  function Division_1_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Epistemology, causation, and humankind","0");
      options[2]=new Option("1. Epistemology","1");
      options[3]=new Option("2. Causation","2");
      options[4]=new Option("3. Determinism and indeterminism","3");
      options[5]=new Option("4. Teleology","4");
      options[6]=new Option("5. [Unassigned]","un");
      options[7]=new Option("6. The self","6");
      options[8]=new Option("7. The unconscious and the subconscious","7");
      options[9]=new Option("8. Humankind","8");
      options[10]=new Option("9. Origin and destiny of individual souls","9");
      }
    }

  /*  Division 13 */
  function Division_1_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Parapsychology and occultism","0");
      options[2]=new Option("1. Parapsychological and occult methods","1");
      options[3]=new Option("2. [Unassigned]","un");
      options[4]=new Option("3. Specific topics in parapsychology and occultism","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. Dreams and mysteries","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. Divinatory graphology","7");
      options[9]=new Option("8. Physiognomy","8");
      options[10]=new Option("9. Phrenology","9");
      }
    }

  /*  Division 14 */
  function Division_1_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Specific philosophical schools","0");
      options[2]=new Option("1. Idealism and related systems","1");
      options[3]=new Option("2. Critical philosophy","2");
      options[4]=new Option("3. Bergsonism and intuitionism","3");
      options[5]=new Option("4. Humanism and related systems","4");
      options[6]=new Option("5. Sensationalism","5");
      options[7]=new Option("6. Naturalism and related systems","6");
      options[8]=new Option("7. Pantheism and related systems","7");
      options[9]=new Option("8. Liberalism, eclecticism, and traditionalism","8");
      options[10]=new Option("9. Other philosophical systems","9");
      }
    }

  /*  Division 15 */
  function Division_1_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Psychology","0");
      options[2]=new Option("1. [Unassigned]","un");
      options[3]=new Option("2. Perception, movement, emotions, and drives","2");
      options[4]=new Option("3. Mental processes and intelligence","3");
      options[5]=new Option("4. Subconscious and altered states","4");
      options[6]=new Option("5. Differential and developmental psychology","5");
      options[7]=new Option("6. Comparative psychology","6");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. Applied psychology","8");
      options[10]=new Option("9. [Unassigned]","un");
      }
    }

  /*  Division 16 */
  function Division_1_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Logic","0");
      options[2]=new Option("1. Induction","1");
      options[3]=new Option("2. Deduction","2");
      options[4]=new Option("3. Not assigned or no longer used","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Fallacies and sources of error","5");
      options[7]=new Option("6. Syllogisms","6");
      options[8]=new Option("7. Hypotheses","7");
      options[9]=new Option("8. Argument and persuasion","8");
      options[10]=new Option("9. Analogy","9");
      }
    }

  /*  Division 17 */
  function Division_1_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Ethics","0");
      options[2]=new Option("1. Ethical systems","1");
      options[3]=new Option("2. Political ethics","2");
      options[4]=new Option("3. Ethics of family relationships","3");
      options[5]=new Option("4. Occupational ethics","4");
      options[6]=new Option("5. Ethics of recreation and leisure","5");
      options[7]=new Option("6. Ethics of sex and reproduction","6");
      options[8]=new Option("7. Ethics of social relations","7");
      options[9]=new Option("8. Ethics of consumption","8");
      options[10]=new Option("9. Other ethical norms","9");
      }
    }

  /*  Division 18 */
  function Division_1_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Ancient, medieval, and Eastern philosophy","0");
      options[2]=new Option("1. Eastern philosophy","1");
      options[3]=new Option("2. Pre-Socratic Greek philosophies","2");
      options[4]=new Option("3. Socratic and related philosophies","3");
      options[5]=new Option("4. Platonic philosophy","4");
      options[6]=new Option("5. Aristotelian philosophy","5");
      options[7]=new Option("6. Skeptic and Neoplatonic philosophies","6");
      options[8]=new Option("7. Epicurean philosophy","7");
      options[9]=new Option("8. Stoic philosophy","8");
      options[10]=new Option("9. Medieval Western philosophy","9");
      }
    }

  /*  Division 19 */
  function Division_1_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Modern Western philosophy","0");
      options[2]=new Option("91. Modern Western philosophy of the United States and Canada","1");
      options[3]=new Option("92. Modern Western philosophy of the British Isles","2");
      options[4]=new Option("93. Modern Western philosophy of Germany and Austria","3");
      options[5]=new Option("94. Modern Western philosophy of France","4");
      options[6]=new Option("95. Modern Western philosophy of Italy","5");
      options[7]=new Option("96. Modern Western philosophy of Spain and Portugal","6");
      options[8]=new Option("97. Modern Western philosophy of the former Soviet Union","7");
      options[9]=new Option("98. Modern Western philosophy of Scandinavia","8");
      options[10]=new Option("99. Modern Western philosophy in other geographic areas","9");
      }
    }

  /*  Division 20 */
  function Division_2_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Religion","0");
      options[2]=new Option("1. Religious mythology, general classes of religion, interreligious relations and attitudes, social theology","1");
      options[3]=new Option("2. Doctrines","2");
      options[4]=new Option("3. Public worship and other practices","3");
      options[5]=new Option("4. Religious experience, life, practice","4");
      options[6]=new Option("5. Religious ethics","5");
      options[7]=new Option("6. Leaders and organization","6");
      options[8]=new Option("7. Missions and religious education","7");
      options[9]=new Option("8. Sources","8");
      options[10]=new Option("9. Sects and reform movements","9");
      }
    }

  /*  Division 21 */
  function Division_2_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Natural theology","0");
      options[2]=new Option("1. Concepts of God","1");
      options[3]=new Option("2. Existence, attributes of God","2");
      options[4]=new Option("3. Creation","3");
      options[5]=new Option("4. Theodicy","4");
      options[6]=new Option("5. Science & religion","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. Humankind","8");
      options[10]=new Option("9. [Unassigned]","un");
      }
    }

  /*  Division 22 */
  function Division_2_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Bible","0");
      options[2]=new Option("1. Old Testament","1");
      options[3]=new Option("2. Historical books of Old Testament","2");
      options[4]=new Option("3. Poetic books of Old Testament","3");
      options[5]=new Option("4. Prophetic books of Old Testament","4");
      options[6]=new Option("5. New Testament","5");
      options[7]=new Option("6. Gospels & Acts","6");
      options[8]=new Option("7. Epistles","7");
      options[9]=new Option("8. Revelation (Apocalypse)","8");
      options[10]=new Option("9. Apocrypha & pseudepigrapha","9");
      }
    }

  /*  Division 23 */
  function Division_2_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Christian theology","0");
      options[2]=new Option("1. God","1");
      options[3]=new Option("2. Jesus Christ & his family","2");
      options[4]=new Option("3. Humankind","3");
      options[5]=new Option("4. Salvation (Soteriology) & grace","4");
      options[6]=new Option("5. Spiritual beings","5");
      options[7]=new Option("6. Eschatology","6");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. Creeds & catechisms","8");
      options[10]=new Option("9. Apologetics & polemics","9");
      }
    }

  /*  Division 24 */
  function Division_2_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Christian moral & devotional theology","0");
      options[2]=new Option("1. Moral theology","1");
      options[3]=new Option("2. Devotional literature","2");
      options[4]=new Option("3. Evangelistic writings for individuals","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. [Unassigned]","un");
      options[7]=new Option("6. Use of art in Christianity","6");
      options[8]=new Option("7. Church furnishings & articles","7");
      options[9]=new Option("8. Christian experience, practice, life","8");
      options[10]=new Option("9. Christian observances in family life","9");
      }
    }

  /*  Division 25 */
  function Division_2_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Select a page","");
      options[1]=new Option("0. Christian orders & local church","0");
      options[2]=new Option("1. Preaching (Homiletics)","1");
      options[3]=new Option("2. Texts of sermons","2");
      options[4]=new Option("3. Pastoral office (Pastoral theology)","3");
      options[5]=new Option("4. Parish government & administration","4");
      options[6]=new Option("5. Religious congregations & orders","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. [Unassigned]","un");
      options[10]=new Option("9. Activities of the local church","9");
      }
    }

  /*  Division 26 */
  function Division_2_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Christian social theology","0");
      options[2]=new Option("1. Social theology","1");
      options[3]=new Option("2. Ecclesiology","2");
      options[4]=new Option("3. Times, places of religious observance","3");
      options[5]=new Option("4. Public worship","4");
      options[6]=new Option("5. Sacraments, other rites & acts","5");
      options[7]=new Option("6. Missions","6");
      options[8]=new Option("7. Associations for religious work","7");
      options[9]=new Option("8. Religious education","8");
      options[10]=new Option("9. Spiritual renewal","9");
      }
    }

  /*  Division 27 */
  function Division_2_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Christian church history","0");
      options[2]=new Option("1. Religious orders in church history","1");
      options[3]=new Option("2. Persecutions in church history","2");
      options[4]=new Option("3. Heresies in church history","3");
      options[5]=new Option("4. Christian church in Europe","4");
      options[6]=new Option("5. Christian church in Asia","5");
      options[7]=new Option("6. Christian church in Africa","6");
      options[8]=new Option("7. Christian church in North America","7");
      options[9]=new Option("8. Christian church in South America","8");
      options[10]=new Option("9. Christian church in other areas","9");
      }
    }

  /*  Division 28 */
  function Division_2_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Christian denominations & sects","0");
      options[2]=new Option("1. Early church & Eastern churches","1");
      options[3]=new Option("2. Roman Catholic Church","2");
      options[4]=new Option("3. Anglican churches","3");
      options[5]=new Option("4. Protestants of Continental origin","4");
      options[6]=new Option("5. Presbyterian, Reformed, Congregational","5");
      options[7]=new Option("6. Baptist, Disciples of Christ, Adventist","6");
      options[8]=new Option("7. Methodist & related churches","7");
      options[9]=new Option("8. [Unassigned]","un");
      options[10]=new Option("9. Other denominations & sects","9");
      }
    }

  /*  Division 29 */
  function Division_2_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Other & comparative religions","0");
      options[2]=new Option("1. Comparative religion","1");
      options[3]=new Option("2. Classical (Greek & Roman) religion","2");
      options[4]=new Option("3. Germanic religion","3");
      options[5]=new Option("4. Religions of Indian origin","4");
      options[6]=new Option("5. Zoroastrianism (Mazdaism, Parseeism)","5");
      options[7]=new Option("6. Judaism","6");
      options[8]=new Option("7. Islam, Babism & Baha'i Faith","7");
      options[9]=new Option("8. [Unassigned]","un");
      options[10]=new Option("9. Other religions","9");
      }
    }

  /*  Division 30 */
  function Division_3_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Social sciences","0");
      options[2]=new Option("1. Sociology & anthropology","1");
      options[3]=new Option("2. Social interaction","2");
      options[4]=new Option("3. Social processes","3");
      options[5]=new Option("4. Factors affecting social behavior","4");
      options[6]=new Option("5. Social groups","5");
      options[7]=new Option("6. Culture & institutions","6");
      options[8]=new Option("7. Communities","7");
      options[9]=new Option("8. [Unassigned]]","un");
      options[10]=new Option("9. [Unassigned]]","un");
      }
    }

  /*  Division 31 */
  function Division_3_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section]","un");
      options[1]=new Option("0. General statistics","0");
      options[2]=new Option("1. [Unassigned]","un");
      options[3]=new Option("2. [Unassigned]","un");
      options[4]=new Option("3. [Unassigned]","un");
      options[5]=new Option("4. General statistics Of Europe","4");
      options[6]=new Option("5. General statistics Of Asia","5");
      options[7]=new Option("6. General statistics Of Africa","6");
      options[8]=new Option("7. General statistics Of North America","7");
      options[9]=new Option("8. General statistics Of South America","8");
      options[10]=new Option("9. General statistics Of other parts of the world","9");
      }
    }

  /*  Division 32 */
  function Division_3_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Political science","0");
      options[2]=new Option("1. Systems of governments & states","1");
      options[3]=new Option("2. Relation of state to organized groups","2");
      options[4]=new Option("3. Civil & political rights","3");
      options[5]=new Option("4. The political process","4");
      options[6]=new Option("5. International migration & colonization","5");
      options[7]=new Option("6. Slavery & emancipation","6");
      options[8]=new Option("7. International relations","7");
      options[9]=new Option("8. The legislative process","8");
      options[10]=new Option("9. Not assigned or no longer used","9");
      }
    }

  /*  Division 33 */
  function Division_3_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Economics","0");
      options[2]=new Option("1. Labor economics","1");
      options[3]=new Option("2. Financial economics","2");
      options[4]=new Option("3. Land economics","3");
      options[5]=new Option("4. Cooperatives","4");
      options[6]=new Option("5. Socialism & related systems","5");
      options[7]=new Option("6. Public finance","6");
      options[8]=new Option("7. International economics","7");
      options[9]=new Option("8. Production","8");
      options[10]=new Option("9. Macroeconomics & related topics","9");
      }
    }

  /*  Division 34 */
  function Division_3_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Law","0");
      options[2]=new Option("1. International law","1");
      options[3]=new Option("2. Constitutional & administrative law","2");
      options[4]=new Option("3. Military, tax, trade, industrial law","3");
      options[5]=new Option("4. Social, labor, welfare, & related law","4");
      options[6]=new Option("5. Criminal law","5");
      options[7]=new Option("6. Private law","6");
      options[8]=new Option("7. Civil procedure & courts","7");
      options[9]=new Option("8. Law (Statutes), regulations, cases","8");
      options[10]=new Option("9. Law of specific jurisdictions & areas","9");
      }
    }

  /*  Division 35 */
  function Division_3_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Public administration","0");
      options[2]=new Option("1. Of central governments","1");
      options[3]=new Option("2. Of local governments","2");
      options[4]=new Option("3. of U.S. federal & state governments","3");
      options[5]=new Option("4. Of specific central governments","4");
      options[6]=new Option("5. Military science","5");
      options[7]=new Option("6. Foot forces & warfare","6");
      options[8]=new Option("7. Mounted forces & warfare","7");
      options[9]=new Option("8. Other specialized forces & services","8");
      options[10]=new Option("9. Sea (Naval) forces & warfare","9");
      }
    }

  /*  Division 36 */
  function Division_3_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Social services; association","0");
      options[2]=new Option("1. General social problems","1");
      options[3]=new Option("2. Social welfare problems & services","2");
      options[4]=new Option("3. Other social problems & services","3");
      options[5]=new Option("4. Criminology","4");
      options[6]=new Option("5. Penal & related institutions","5");
      options[7]=new Option("6. Association","6");
      options[8]=new Option("7. General clubs","7");
      options[9]=new Option("8. Insurance","8");
      options[10]=new Option("9. Miscellaneous kinds of associations","9");
      }
    }

  /*  Division 37 */
  function Division_3_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Education","0");
      options[2]=new Option("1. School management; special education","1");
      options[3]=new Option("2. Elementary education","2");
      options[4]=new Option("3. Secondary education","3");
      options[5]=new Option("4. Adult education","4");
      options[6]=new Option("5. Curriculums","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. Higher education","8");
      options[10]=new Option("9. Government regulation, control, support","9");
      }
    }

  /*  Division 38 */
  function Division_3_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Commerce, communications, transport","0");
      options[2]=new Option("1. Internal commerce (Domestic trade)","1");
      options[3]=new Option("2. International commerce (Foreign trade)","2");
      options[4]=new Option("3. Postal communication","3");
      options[5]=new Option("4. Communications; Telecommunication","4");
      options[6]=new Option("5. Railroad transportation","5");
      options[7]=new Option("6. Inland waterway & ferry transportation","6");
      options[8]=new Option("7. Water, air, space transportation","7");
      options[9]=new Option("8. Transportation; Ground transportation","8");
      options[10]=new Option("9. Metrology & standardization","9");
      }
    }

  /*  Division 39 */
  function Division_3_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Customs, etiquette, folklore","0");
      options[2]=new Option("1. Costume & personal appearance","1");
      options[3]=new Option("2. Customs of life cycle & domestic life","2");
      options[4]=new Option("3. Death customs","3");
      options[5]=new Option("4. General customs","4");
      options[6]=new Option("5. Etiquette (Manners)","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. [Unassigned]","un");
      options[9]=new Option("8. Folklore","8");
      options[10]=new Option("9. Customs of war & diplomacy","9");
      }
    }

  /*  Division 40 */
  function Division_4_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Language","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. Miscellany","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Special topics","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations & management","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. With respect to kinds of persons","8");
      options[10]=new Option("9. Geographical & persons treatment","9");
      }
    }

  /*  Division 41 */
  function Division_4_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Linguistics","0");
      options[2]=new Option("1. Writing systems","1");
      options[3]=new Option("2. Etymology","2");
      options[4]=new Option("3. Dictionaries","3");
      options[5]=new Option("4. Phonology","4");
      options[6]=new Option("5. Structural systems (Grammar)","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. Dialectology & historical linguistics","7");
      options[9]=new Option("8. Standard usage; Applied linguistics","8");
      options[10]=new Option("9. Verbal language not spoken or written","9");
      }
    }

  /*  Division 42 */
  function Division_4_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. English & Old English","0");
      options[2]=new Option("1. English writing system & phonology","1");
      options[3]=new Option("2. English etymology","2");
      options[4]=new Option("3. English dictionaries","3");
      options[5]=new Option("4. [Unassigned]","un");
      options[6]=new Option("5. English grammar","5");
      options[7]=new Option("6. [Unassigned]","un");
      options[8]=new Option("7. English language variations","7");
      options[9]=new Option("8. Standard English usage","8");
      options[10]=new Option("9. Old English (Anglo-Saxon)","9");
      }
    }

  /*  Division 43 */
  function Division_4_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Germanic languages; German","0");
      options[2]=new Option("1. German writing system & phonology","1");
      options[3]=new Option("2. German etymology","2");
      options[4]=new Option("3. German dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. German grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. German language variations","7");
      options[9]=new Option("8. Standard German usage","8");
      options[10]=new Option("9. Other Germanic languages","9");
      }
    }

  /*  Division 44 */
  function Division_4_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Romance languages; French","0");
      options[2]=new Option("1. French writing system & phonology","1");
      options[3]=new Option("2. French etymology","2");
      options[4]=new Option("3. French dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. French grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. French language variations","7");
      options[9]=new Option("8. Standard French usage","8");
      options[10]=new Option("9. Proven�al & Catalan","9");
      }
    }

  /*  Division 45 */
  function Division_4_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Italian, Romanian, Rhaeto-Romanic","0");
      options[2]=new Option("1. Italian writing system & phonology","1");
      options[3]=new Option("2. Italian etymology","2");
      options[4]=new Option("3. Italian dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Italian grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Italian language variations","7");
      options[9]=new Option("8. Standard Italian usage","8");
      options[10]=new Option("9. Romanian & Rhaeto-Romanic","9");
      }
    }

  /*  Division 46 */
  function Division_4_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Spanish & Portuguese languages","0");
      options[2]=new Option("1. Spanish writing system & phonology","1");
      options[3]=new Option("2. Spanish etymology","2");
      options[4]=new Option("3. Spanish dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Spanish grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Spanish language variations","7");
      options[9]=new Option("8. Standard Spanish usage","8");
      options[10]=new Option("9. Portuguese","9");
      }
    }

  /*  Division 47 */
  function Division_4_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Italic languages; Latin","0");
      options[2]=new Option("1. Classical Latin writing & phonology","1");
      options[3]=new Option("2. Classical Latin etymology & phonology","2");
      options[4]=new Option("3. Classical Latin dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Classical Latin grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Old, Postclassical, Vulgar Latin","7");
      options[9]=new Option("8. Classical Latin usage","8");
      options[10]=new Option("9. Other Italic languages","9");
      }
    }

  /*  Division 48 */
  function Division_4_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Hellenic languages; Classical Greek","0");
      options[2]=new Option("1. Classical Greek writing & phonology","1");
      options[3]=new Option("2. Classical Greek etymology","2");
      options[4]=new Option("3. Classical Greek dictionaries","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Classical Greek grammar","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Preclassical & postclassical Greek","7");
      options[9]=new Option("8. Classical Greek usage","8");
      options[10]=new Option("9. Other Hellenic languages","9");
      }
    }

  /*  Division 49 */
  function Division_4_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Other languages","0");
      options[2]=new Option("1. East Indo-European & Celtic languages","1");
      options[3]=new Option("2. Afro-Asiatic languages; Semitic","2");
      options[4]=new Option("3. Non-Semitic Afro-Asiatic languages","3");
      options[5]=new Option("4. Ural-Altaic, Paleosiberian, Dravidian","4");
      options[6]=new Option("5. Languages of East & Southeast Asia","5");
      options[7]=new Option("6. African languages","6");
      options[8]=new Option("7. North American native languages","7");
      options[9]=new Option("8. South American native languages","8");
      options[10]=new Option("9. Miscellaneous languages","9");
      }
    }

  /*  Division 50 */
  function Division_5_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Natural sciences & mathematics","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. Miscellany","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations & management","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. Natural history","8");
      options[10]=new Option("9. Historical, geographic, persons treatment","9");
      }
    }

  /*  Division 51 */
  function Division_5_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Mathematics","0");
      options[2]=new Option("1. General principles","1");
      options[3]=new Option("2. Algebra & number theory","2");
      options[4]=new Option("3. Arithmetic","3");
      options[5]=new Option("4. Topology","4");
      options[6]=new Option("5. Analysis","5");
      options[7]=new Option("6. Geometry","6");
      options[8]=new Option("7. Not assigned or no longer used","7");
      options[9]=new Option("8. Numerical analysis","8");
      options[10]=new Option("9. Probabilities & applied mathematics","9");
      }
    }

  /*  Division 52 */
  function Division_5_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Astronomy & allied sciences","0");
      options[2]=new Option("1. Celestial mechanics","1");
      options[3]=new Option("2. Techniques, equipment, materials","2");
      options[4]=new Option("3. Specific celestial bodies & phenomena","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Earth (Astronomical geography)","5");
      options[7]=new Option("6. Mathematical geography","6");
      options[8]=new Option("7. Celestial navigation","7");
      options[9]=new Option("8. Ephemerides","8");
      options[10]=new Option("9. Chronology","9");
      }
    }

  /*  Division 53 */
  function Division_5_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Physics","0");
      options[2]=new Option("1. Classical mechanics; Solid mechanics","1");
      options[3]=new Option("2. Fluid mechanics; Liquid mechanics","2");
      options[4]=new Option("3. Gas mechanics","3");
      options[5]=new Option("4. Sound & related vibrations","4");
      options[6]=new Option("5. Light & paraphotic phenomena","5");
      options[7]=new Option("6. Heat","6");
      options[8]=new Option("7. Electricity & electronics","7");
      options[9]=new Option("8. Magnetism","8");
      options[10]=new Option("9. Modern physics","9");
      }
    }

  /*  Division 54 */
  function Division_5_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Chemistry & allied sciences","0");
      options[2]=new Option("1. Physical & theoretical chemistry","1");
      options[3]=new Option("2. Techniques, equipment, materials","2");
      options[4]=new Option("3. Analytical chemistry","3");
      options[5]=new Option("4. Qualitative analysis","4");
      options[6]=new Option("5. Quantitative analysis","5");
      options[7]=new Option("6. Inorganic chemistry","6");
      options[8]=new Option("7. Organic chemistry","7");
      options[9]=new Option("8. Crystallography","8");
      options[10]=new Option("9. Mineralogy","9");
      }
    }

  /*  Division 55 */
  function Division_5_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Earth sciences","0");
      options[2]=new Option("1. Geology, hydrology, meteorology","1");
      options[3]=new Option("2. Petrology","2");
      options[4]=new Option("3. Economic geology","3");
      options[5]=new Option("4. Earth sciences of Europe","4");
      options[6]=new Option("5. Earth sciences of Asia","5");
      options[7]=new Option("6. Earth sciences of Africa","6");
      options[8]=new Option("7. Earth sciences of North America","7");
      options[9]=new Option("8. Earth sciences of South America","8");
      options[10]=new Option("9. Earth sciences of other areas","9");
      }
    }

  /*  Division 56 */
  function Division_5_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Paleontology; Paleozoology","0");
      options[2]=new Option("1. Paleobotany","1");
      options[3]=new Option("2. Fossil invertebrates","2");
      options[4]=new Option("3. Fossil primitive phyla","3");
      options[5]=new Option("4. Fossil Mollusca & Molluscoidea","4");
      options[6]=new Option("5. Other fossil invertebrates","5");
      options[7]=new Option("6. Fossil Vertebrata (Fossil Craniata)","6");
      options[8]=new Option("7. Fossil cold-blooded vertebrates","7");
      options[9]=new Option("8. Fossil Aves (Fossil birds)","8");
      options[10]=new Option("9. Fossil Mammalia","9");
      }
    }

  /*  Division 57 */
  function Division_5_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Life sciences","0");
      options[2]=new Option("1. Physiology","1");
      options[3]=new Option("2. Biochemistry","2");
      options[4]=new Option("3. Physiological systems of animals","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Physiological systems of plants","5");
      options[7]=new Option("6. Genetics and evolution","6");
      options[8]=new Option("7. Ecology","7");
      options[9]=new Option("8. Natural history of organisms","8");
      options[10]=new Option("9. Microorganisms, fungi, algae","9");
      }
    }

  /*  Division 58 */
  function Division_5_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Plants","0");
      options[2]=new Option("1. Botany","1");
      options[3]=new Option("2. Plants noted for specific vegetative characteristics and flowers","2");
      options[4]=new Option("3. Dicotyledones","3");
      options[5]=new Option("4. Monocotyledones","4");
      options[6]=new Option("5. Gymnospermae (Pinophyta)","5");
      options[7]=new Option("6. Cryptogamia (Seedless plants)","6");
      options[8]=new Option("7. Pteridophyta (Vascular cryptogams)","7");
      options[9]=new Option("8. Bryophyta","8");
      options[10]=new Option("9. Forestry","9");
      }
    }

  /*  Division 59 */
  function Division_5_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Zoological sciences/Animals","0");
      options[2]=new Option("1. Zoology","1");
      options[3]=new Option("2. Invertebrates","2");
      options[4]=new Option("3. Protozoa, Echinodermata, related phyla","3");
      options[5]=new Option("4. Mollusca & Molluscoidea","4");
      options[6]=new Option("5. Other invertebrates","5");
      options[7]=new Option("6. Vertebrata (Craniata, Vertebrates)","6");
      options[8]=new Option("7. Cold-blooded vertebrates, fishes","7");
      options[9]=new Option("8. Aves (Birds)","8");
      options[10]=new Option("9. Mammalia (Mammals)","9");
      }
    }

  /*  Division 60 */
  function Division_6_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Technology","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. Miscellany","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Special topics","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. Invention & patents","8");
      options[10]=new Option("9. Historical, geographic, persons treatment","9");
      }
    }

  /*  Division 61 */
  function Division_6_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Medical sciences; Medicine","0");
      options[2]=new Option("1. Human anatomy, cytology, histology","1");
      options[3]=new Option("2. Human physiology","2");
      options[4]=new Option("3. Personal health & safety","3");
      options[5]=new Option("4. Incidence & prevention of disease","4");
      options[6]=new Option("5. Pharmacology and therapeutics","5");
      options[7]=new Option("6. Diseases","6");
      options[8]=new Option("7. Surgery & related medical specialties","7");
      options[9]=new Option("8. Gynaecology & other medical specialties","8");
      options[10]=new Option("9. Experimental medicine","9");
      }
    }

  /*  Division 62 */
  function Division_6_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Engineering & Applied operations","0");
      options[2]=new Option("1. Applied physics","1");
      options[3]=new Option("2. Mining & related operations","2");
      options[4]=new Option("3. Military & nautical engineering","3");
      options[5]=new Option("4. Civil engineering","4");
      options[6]=new Option("5. Engineering of railroads, roads","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Hydraulic engineering","7");
      options[9]=new Option("8. Sanitary & municipal engineering","8");
      options[10]=new Option("9. Other branches of engineering","9");
      }
    }

  /*  Division 63 */
  function Division_6_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Agriculture","0");
      options[2]=new Option("1. Techniques, equipment, materials","1");
      options[3]=new Option("2. Plant injuries, diseases, pests","2");
      options[4]=new Option("3. Field & plantation crops","3");
      options[5]=new Option("4. Orchards, fruits, forestry","4");
      options[6]=new Option("5. Garden crops (Horticulture)","5");
      options[7]=new Option("6. Animal husbandry","6");
      options[8]=new Option("7. Processing dairy & related products","7");
      options[9]=new Option("8. Insect culture","8");
      options[10]=new Option("9. Hunting, fishing, conservation","9");
      }
    }

  /*  Division 64 */
  function Division_6_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Home economics & family living","0");
      options[2]=new Option("1. Food & drink","1");
      options[3]=new Option("2. Meals & table service","2");
      options[4]=new Option("3. Housing & household equipment","3");
      options[5]=new Option("4. Household utilities","4");
      options[6]=new Option("5. Household furnishings","5");
      options[7]=new Option("6. Sewing, clothing, personal living","6");
      options[8]=new Option("7. Management of public households","7");
      options[9]=new Option("8. Housekeeping","8");
      options[10]=new Option("9. Child rearing & home care of sick","9");
      }
    }

  /*  Division 65 */
  function Division_6_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Management & auxiliary services","0");
      options[2]=new Option("1. Office services","1");
      options[3]=new Option("2. Processes of written communication","2");
      options[4]=new Option("3. Shorthand","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Not assigned or no longer used","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Accounting","7");
      options[9]=new Option("8. General management","8");
      options[10]=new Option("9. Advertising & public relations","9");
      }
    }

  /*  Division 66 */
  function Division_6_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Chemical engineering","0");
      options[2]=new Option("1. Industrial chemicals technology","1");
      options[3]=new Option("2. Explosives, fuels technology","2");
      options[4]=new Option("3. Beverage technology","3");
      options[5]=new Option("4. Food technology","4");
      options[6]=new Option("5. Industrial oils, fats, waxes, gases","5");
      options[7]=new Option("6. Ceramic & allied technologies","6");
      options[8]=new Option("7. Cleaning, color, related technologies","7");
      options[9]=new Option("8. Technology of other organic products","8");
      options[10]=new Option("9. Metallurgy","9");
      }
    }

  /*  Division 67 */
  function Division_6_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Manufacturing","0");
      options[2]=new Option("1. Metalworking & metal products","1");
      options[3]=new Option("2. Iron, steel, other iron alloys","2");
      options[4]=new Option("3. Nonferrous metals","3");
      options[5]=new Option("4. Lumber processing, wood products, cork","4");
      options[6]=new Option("5. Leather & fur processing","5");
      options[7]=new Option("6. Pulp & paper technology","6");
      options[8]=new Option("7. Textiles","7");
      options[9]=new Option("8. Elastomers & elastomer products","8");
      options[10]=new Option("9. Other products of specific materials","9");
      }
    }

  /*  Division 68 */
  function Division_6_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Manufacture for specific uses","0");
      options[2]=new Option("1. Precision instruments & other devices","1");
      options[3]=new Option("2. Small forge work (Blacksmithing)","2");
      options[4]=new Option("3. Hardware & household appliances","3");
      options[5]=new Option("4. Furnishings & home workshops","4");
      options[6]=new Option("5. Leather, fur, related products","5");
      options[7]=new Option("6. Printing & related activities","6");
      options[8]=new Option("7. Clothing","7");
      options[9]=new Option("8. Other final products & packaging","8");
      options[10]=new Option("9. Not assigned or no longer used","9");
      }
    }

  /*  Division 69 */
  function Division_6_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Buildings","0");
      options[2]=new Option("1. Building materials","1");
      options[3]=new Option("2. Auxiliary construction practices","2");
      options[4]=new Option("3. Specific materials & purposes","3");
      options[5]=new Option("4. Wood construction; Carpentry","4");
      options[6]=new Option("5. Roof covering","5");
      options[7]=new Option("6. Utilities","6");
      options[8]=new Option("7. Heating, ventilating, air-conditioning","7");
      options[9]=new Option("8. Detail finishing","8");
      options[10]=new Option("9. Not assigned or no longer used","9");
      }
    }

  /*  Division 70 */
  function Division_7_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. The Arts; fine & decorative arts","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. Miscellany","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Special topics","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations & management","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. Galleries, museums, private collections","8");
      options[10]=new Option("9. Historical, areas, persons treatment","9");
      }
    }

  /*  Division 71 */
  function Division_7_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Civic & landscape art","0");
      options[2]=new Option("1. Area planning (Civic art)","1");
      options[3]=new Option("2. Landscape architecture","2");
      options[4]=new Option("3. Landscape architecture of trafficways","3");
      options[5]=new Option("4. Water features","4");
      options[6]=new Option("5. Woody plants","5");
      options[7]=new Option("6. Herbaceous plants","6");
      options[8]=new Option("7. Structures","7");
      options[9]=new Option("8. Landscape design of cemeteries","8");
      options[10]=new Option("9. Natural landscapes","9");
      }
    }

  /*  Division 72 */
  function Division_7_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Architecture","0");
      options[2]=new Option("1. Architectural structure","1");
      options[3]=new Option("2. Architecture to ca. 300","2");
      options[4]=new Option("3. Architecture from ca. 300 to 1399","3");
      options[5]=new Option("4. Architecture from 1400","4");
      options[6]=new Option("5. Public structures","5");
      options[7]=new Option("6. Buildings for religious purposes","6");
      options[8]=new Option("7. Buildings for education & research","7");
      options[9]=new Option("8. Residential & related buildings","8");
      options[10]=new Option("9. Design & decoration","9");
      }
    }

  /*  Division 73 */
  function Division_7_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Plastic arts; Sculpture","0");
      options[2]=new Option("1. Processes, forms, subjects of sculpture","1");
      options[3]=new Option("2. Sculpture to ca. 500","2");
      options[4]=new Option("3. Greek, Etruscan, Roman sculpture","3");
      options[5]=new Option("4. Sculpture from ca. 500 to 1399","4");
      options[6]=new Option("5. Sculpture from 1400","5");
      options[7]=new Option("6. Carving & carvings","6");
      options[8]=new Option("7. Numismatics & sigillography","7");
      options[9]=new Option("8. Ceramic arts","8");
      options[10]=new Option("9. Art metalwork","9");
      }
    }

  /*  Division 74 */
  function Division_7_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Drawing & decorative arts","0");
      options[2]=new Option("1. Drawing & drawings","1");
      options[3]=new Option("2. Perspective (graphical)","2");
      options[4]=new Option("3. Drawing & drawings by subject","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Decorative arts","5");
      options[7]=new Option("6. Textile arts","6");
      options[8]=new Option("7. Interior decoration","7");
      options[9]=new Option("8. Glass","8");
      options[10]=new Option("9. Furniture & accessories","9");
      }
    }

  /*  Division 75 */
  function Division_7_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Painting & paintings","0");
      options[2]=new Option("1. Techniques, equipment, forms","1");
      options[3]=new Option("2. Color","2");
      options[4]=new Option("3. Symbolism, allegory, mythology, legend","3");
      options[5]=new Option("4. Genre paintings","4");
      options[6]=new Option("5. Religion & religious symbolism","5");
      options[7]=new Option("6. Not assigned or no longer used","6");
      options[8]=new Option("7. Human figures & their parts","7");
      options[9]=new Option("8. Other subjects","8");
      options[10]=new Option("9. Geographical, historical, areas, persons treatment","9");
      }
    }

  /*  Division 76 */
  function Division_7_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Graphic arts; Printmaking & prints","0");
      options[2]=new Option("1. Relief processes (Block printing)","1");
      options[3]=new Option("2. Not assigned or no longer used","2");
      options[4]=new Option("3. Lithographic (Planographic) processes","3");
      options[5]=new Option("4. Chromolithography & serigraphy","4");
      options[6]=new Option("5. Metal engraving","5");
      options[7]=new Option("6. Mezzotinting & related processes","6");
      options[8]=new Option("7. Etching & drypoint","7");
      options[9]=new Option("8. Not assigned or no longer used","8");
      options[10]=new Option("9. Prints","9");
      }
    }

  /*  Division 77 */
  function Division_7_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Photography & photographs","0");
      options[2]=new Option("1. Techniques, equipment, materials","1");
      options[3]=new Option("2. Metallic salt processes","2");
      options[4]=new Option("3. Pigment processes of printing","3");
      options[5]=new Option("4. Holography","4");
      options[6]=new Option("5. Digital photography","5");
      options[7]=new Option("6. Computer art","6");
      options[8]=new Option("7. Cinematography and Videography [1]","7");
      options[9]=new Option("8. Fields & kinds of photography","8");
      options[10]=new Option("9. Photographs","9");
      }
    }

  /*  Division 78 */
  function Division_7_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Music","0");
      options[2]=new Option("1. General principles & musical forms","1");
      options[3]=new Option("2. Vocal music","2");
      options[4]=new Option("3. Music for single voices; The voice","3");
      options[5]=new Option("4. Instruments & Instrumental ensembles","4");
      options[6]=new Option("5. Chamber music","5");
      options[7]=new Option("6. Keyboard & other instruments","6");
      options[8]=new Option("7. Stringed instruments (Chordophones)","7");
      options[9]=new Option("8. Wind instruments (Aerophones)","8");
      options[10]=new Option("9. Not assigned or no longer used","9");
      }
    }

  /*  Division 79 */
  function Division_7_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Recreational & performing arts","0");
      options[2]=new Option("1. Public performances","1");
      options[3]=new Option("2. Stage presentations","2");
      options[4]=new Option("3. Indoor games & amusements","3");
      options[5]=new Option("4. Indoor games of skill","4");
      options[6]=new Option("5. Games of chance","5");
      options[7]=new Option("6. Athletic & outdoor sports & games","6");
      options[8]=new Option("7. Aquatic & air sports","7");
      options[9]=new Option("8. Equestrian sports & animal racing","8");
      options[10]=new Option("9. Fishing, hunting, shooting","9");
      }
    }

  /*  Division 80 */
  function Division_8_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu.  */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Literature & rhetoric","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. Miscellany","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Not assigned or no longer used","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. Rhetoric & collections of literature","8");
      options[10]=new Option("9. Literary history & criticism","9");
      }
    }

  /*  Division 81 */
  function Division_8_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. American literature in English","0");
      options[2]=new Option("1. Poetry","1");
      options[3]=new Option("2. Drama","2");
      options[4]=new Option("3. Fiction","3");
      options[5]=new Option("4. Essays","4");
      options[6]=new Option("5. Speeches","5");
      options[7]=new Option("6. Letters","6");
      options[8]=new Option("7. Satire & humor","7");
      options[9]=new Option("8. Miscellaneous writings","8");
      options[10]=new Option("9. Not assigned or no longer used","9");
      }
    }

  /*  Division 82 */
  function Division_8_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. English & Old English literatures","0");
      options[2]=new Option("1. English poetry","1");
      options[3]=new Option("2. English drama","2");
      options[4]=new Option("3. English fiction","3");
      options[5]=new Option("4. English essays","4");
      options[6]=new Option("5. English speeches","5");
      options[7]=new Option("6. English letters","6");
      options[8]=new Option("7. English satire & humor","7");
      options[9]=new Option("8. English miscellaneous writings","8");
      options[10]=new Option("9. Old English (Anglo-Saxon)","9");
      }
    }

  /*  Division 83 */
  function Division_8_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. German & related literatures","0");
      options[2]=new Option("1. German poetry","1");
      options[3]=new Option("2. German drama","2");
      options[4]=new Option("3. German fiction","3");
      options[5]=new Option("4. German essays","4");
      options[6]=new Option("5. German speeches","5");
      options[7]=new Option("6. German letters","6");
      options[8]=new Option("7. German satire & humor","7");
      options[9]=new Option("8. German miscellaneous writings","8");
      options[10]=new Option("9. Other Germanic literatures","9");
      }
    }

  /*  Division 84 */
  function Division_8_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Literatures of Romance languages","0");
      options[2]=new Option("1. French poetry","1");
      options[3]=new Option("2. French drama","2");
      options[4]=new Option("3. French fiction","3");
      options[5]=new Option("4. French essays","4");
      options[6]=new Option("5. French speeches","5");
      options[7]=new Option("6. French letters","6");
      options[8]=new Option("7. French satire & humor","7");
      options[9]=new Option("8. French miscellaneous writings","8");
      options[10]=new Option("9. Occitan & Catalan literatures","9");
      }
    }

  /*  Division 85 */
  function Division_8_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Italian, Romanian, Rhaeto-Romanic","0");
      options[2]=new Option("1. Italian poetry","1");
      options[3]=new Option("2. Italian drama","2");
      options[4]=new Option("3. Italian fiction","3");
      options[5]=new Option("4. Italian essays","4");
      options[6]=new Option("5. Italian speeches","5");
      options[7]=new Option("6. Italian letters","6");
      options[8]=new Option("7. Italian satire & humor","7");
      options[9]=new Option("8. Italian miscellaneous writings","8");
      options[10]=new Option("9. Romanian & Rhaeto-Romanic","9");
      }
    }

  /*  Division 86 */
  function Division_8_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Spanish & Portuguese literatures","0");
      options[2]=new Option("1. Spanish poetry","1");
      options[3]=new Option("2. Spanish drama","2");
      options[4]=new Option("3. Spanish fiction","3");
      options[5]=new Option("4. Spanish essays","4");
      options[6]=new Option("5. Spanish speeches","5");
      options[7]=new Option("6. Spanish letters","6");
      options[8]=new Option("7. Spanish satire & humor","7");
      options[9]=new Option("8. Spanish miscellaneous writings","8");
      options[10]=new Option("9. Portuguese literature","9");
      }
    }

  /*  Division 87 */
  function Division_8_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Italic literatures; Latin literature","0");
      options[2]=new Option("1. Latin poetry","1");
      options[3]=new Option("2. Latin dramatic poetry & drama","2");
      options[4]=new Option("3. Latin epic poetry & fiction","3");
      options[5]=new Option("4. Latin lyric poetry","4");
      options[6]=new Option("5. Latin speeches","5");
      options[7]=new Option("6. Latin letters","6");
      options[8]=new Option("7. Latin satire & humor","7");
      options[9]=new Option("8. Latin miscellaneous writings","8");
      options[10]=new Option("9. Literatures of other Italic languages","9");
      }
    }

  /*  Division 88 */
  function Division_8_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Hellenic literatures; Classical Greek","0");
      options[2]=new Option("1. Classical Greek poetry","1");
      options[3]=new Option("2. Classical Greek drama","2");
      options[4]=new Option("3. Classical Greek epic poetry & fiction","3");
      options[5]=new Option("4. Classical Greek lyric poetry","4");
      options[6]=new Option("5. Classical Greek speeches","5");
      options[7]=new Option("6. Classical Greek letters","6");
      options[8]=new Option("7. Classical Greek satire & humor","7");
      options[9]=new Option("8. Classical Greek miscellaneous writings","8");
      options[10]=new Option("9. Modern Greek literature","9");
      }
    }

  /*  Division 89 */
  function Division_8_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Literatures of other languages","0");
      options[2]=new Option("1. East Indo-European & Celtic","1");
      options[3]=new Option("2. Afro-Asiatic literatures Semitic","2");
      options[4]=new Option("3. Non-Semitic Afro-Asiatic literatures","3");
      options[5]=new Option("4. Ural-Altaic, Paleosiberian, Dravidian","4");
      options[6]=new Option("5. Literatures of East & Southeast Asia","5");
      options[7]=new Option("6. African literatures","6");
      options[8]=new Option("7. North American native literatures","7");
      options[9]=new Option("8. South American native literatures","8");
      options[10]=new Option("9. Other literatures","9");
      }
    }

  /*  Division 90 */
  function Division_9_0(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. History & geography","0");
      options[2]=new Option("1. Philosophy & theory","1");
      options[3]=new Option("2. unassigned","2");
      options[4]=new Option("3. Dictionaries & encyclopedias","3");
      options[5]=new Option("4. Collected accounts of events","4");
      options[6]=new Option("5. Serial publications","5");
      options[7]=new Option("6. Organizations & management","6");
      options[8]=new Option("7. Education, research, related topics","7");
      options[9]=new Option("8. With respect to kinds of persons","8");
      options[10]=new Option("9. World history","9");
      }
    }

  /*  Division 91 */
  function Division_9_1(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Geography & travel","0");
      options[2]=new Option("1. Historical geography","1");
      options[3]=new Option("2. Graphic representations of earth","2");
      options[4]=new Option("3. Ancient world","3");
      options[5]=new Option("4. Europe","4");
      options[6]=new Option("5. Asia","5");
      options[7]=new Option("6. Africa","6");
      options[8]=new Option("7. North America","7");
      options[9]=new Option("8. South America","8");
      options[10]=new Option("9. Other areas","9");
      }
    }

  /*  Division 92 */
  function Division_9_2(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. Biography, genealogy, insignia","0");
      options[2]=new Option("1. This range is reserved.","1");
      options[3]=new Option("2. This range is reserved.","2");
      options[4]=new Option("3. This range is reserved.","3");
      options[5]=new Option("4. This range is reserved.","4");
      options[6]=new Option("5. This range is reserved.","5");
      options[7]=new Option("6. This range is reserved.","6");
      options[8]=new Option("7. This range is reserved.","7");
      options[9]=new Option("8. This range is reserved.","8");
      options[10]=new Option("9. Genealogy, names, insignia","9");
      }
    }

  /*  Division 93 */
  function Division_9_3(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. History of ancient world","0");
      options[2]=new Option("1. History of ancient world; China","1");
      options[3]=new Option("2. History of ancient world; Egypt","2");
      options[4]=new Option("3. History of ancient world; Palestine","3");
      options[5]=new Option("4. History of ancient world; India","4");
      options[6]=new Option("5. History of ancient world; Mesopotamia & Iranian Plateau","5");
      options[7]=new Option("6. History of ancient world; Europe north & west of Italy","6");
      options[8]=new Option("7. History of ancient world; Italy & adjacent territories","7");
      options[9]=new Option("8. History of ancient world; Greece","8");
      options[10]=new Option("9. History of ancient world; Other parts of ancient world","9");
      }
    }

  /*  Division 94 */
  function Division_9_4(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of Europe","0");
      options[2]=new Option("1. General history of Europe; British Isles","1");
      options[3]=new Option("2. General history of Europe; England & Wales","2");
      options[4]=new Option("3. General history of Europe; Central Europe; Germany","3");
      options[5]=new Option("4. General history of Europe; France & Monaco","4");
      options[6]=new Option("5. General history of Europe; Italian Peninsula & adjacent islands","5");
      options[7]=new Option("6. General history of Europe; Iberian Peninsula & adjacent islands","6");
      options[8]=new Option("7. General history of Europe; Eastern Europe; Russia","7");
      options[9]=new Option("8. General history of Europe; Northern Europe; Scandinavia","8");
      options[10]=new Option("9. General history of Europe; Other parts of Europe","9");
      }
    }

  /*  Division 95 */
  function Division_9_5(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of Asia; Far East","0");
      options[2]=new Option("1. General history of Asia; China & adjacent areas","1");
      options[3]=new Option("2. General history of Asia; Japan","2");
      options[4]=new Option("3. General history of Asia; Arabian Peninsula & adjacent areas","3");
      options[5]=new Option("4. General history of Asia; South Asia; India","4");
      options[6]=new Option("5. General history of Asia; Iran","5");
      options[7]=new Option("6. General history of Asia; Middle East (Near East)","6");
      options[8]=new Option("7. General history of Asia; Siberia (Asiatic Russia)","7");
      options[9]=new Option("8. General history of Asia; Central Asia","8");
      options[10]=new Option("9. General history of Asia; Southeast Asia","9");
      }
    }

  /*  Division 96 */
  function Division_9_6(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of Africa","0");
      options[2]=new Option("1. General history of Africa; Tunisia & Libya","1");
      options[3]=new Option("2. General history of Africa; Egypt & Sudan","2");
      options[4]=new Option("3. General history of Africa; Ethiopia","3");
      options[5]=new Option("4. General history of Africa; Morocco & Canary Islands","4");
      options[6]=new Option("5. General history of Africa; Algeria","5");
      options[7]=new Option("6. General history of Africa; West Africa & offshore islands","6");
      options[8]=new Option("7. General history of Africa; Central Africa & offshore islands","7");
      options[9]=new Option("8. General history of Africa; Southern Africa","8");
      options[10]=new Option("9. General history of Africa; South Indian Ocean islands","9");
      }
    }

  /*  Division 97 */
  function Division_9_7(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of North America","0");
      options[2]=new Option("1. General history of North America; Canada","1");
      options[3]=new Option("2. General history of North America; Middle America; Mexico","2");
      options[4]=new Option("3. General history of North America; United States","3");
      options[5]=new Option("4. General history of North America; Northeastern United States","4");
      options[6]=new Option("5. General history of North America; Southeastern United States","5");
      options[7]=new Option("6. General history of North America; South central United States","6");
      options[8]=new Option("7. General history of North America; North central United States","7");
      options[9]=new Option("8. General history of North America; Western United States","8");
      options[10]=new Option("9. General history of North America; Great Basin & Pacific Slope","9");
      }
    }

  /*  Division 98 */
  function Division_9_8(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of South America","0");
      options[2]=new Option("1. General history of South America; Brazil","1");
      options[3]=new Option("2. General history of South America; Argentina","2");
      options[4]=new Option("3. General history of South America; Chile","3");
      options[5]=new Option("4. General history of South America; Bolivia","4");
      options[6]=new Option("5. General history of South America; Peru","5");
      options[7]=new Option("6. General history of South America; Colombia & Ecuador","6");
      options[8]=new Option("7. General history of South America; Venezuela","7");
      options[9]=new Option("8. General history of South America; Guiana","8");
      options[10]=new Option("9. General history of South America; Paraguay & Uruguay","9");
      }
    }

  /*  Division 99 */
  function Division_9_9(aMenu)
    {
    nullOptionsTMA(aMenu);
    with (aMenu)
      {
       /* Rewrites the text and address for the 3rd drop down menu. */
      options[0]=new Option("Choose a section","");
      options[1]=new Option("0. General history of other areas","0");
      options[2]=new Option("1. Not assigned or no longer used","1");
      options[3]=new Option("2. Not assigned or no longer used","2");
      options[4]=new Option("3. General history of other areas; New Zealand","3");
      options[5]=new Option("4. General history of other areas; Australia","4");
      options[6]=new Option("5. General history of other areas; Melanesia; New Guinea","5");
      options[7]=new Option("6. General history of other areas; Other parts of Pacific Polynesia","6");
      options[8]=new Option("7. General history of other areas; Atlantic Ocean islands","7");
      options[9]=new Option("8. General history of other areas; Arctic islands & Antarctica","8");
      options[10]=new Option("9. Extraterrestrial worlds","9");
      }
    }
  /*  END OF SECTION DEFINITIONS */

  /*  START THE FUNCTION SELECTORS */
  /*  Uses a function that will asign the divisions (2rd drop down menu) for the class (1st drop down menu) */
  function changeDivisions()
    {
    aMenu=document.formDDC.sectionsDDC;
    aMenu2=document.formDDC.divisionsDDC;
    aMenu3=document.formDDC.classesDDC;
    with (aMenu3)
      {
      switch (selectedIndex)
        {
        case 0: nullOptionsTMA(aMenu);
    nullOptionsTMA(aMenu2);
    aMenu.options[0]= new Option("Pages appear here","");
    aMenu3.options[0].selected=true;
    history.go(0);
    break;
        case 1: Class_0(aMenu2);
    break;
        case 2: Class_1(aMenu2);
    break;
        case 3: Class_2(aMenu2);
    break;
        case 4: Class_3(aMenu2);
    break;
        case 5: Class_4(aMenu2);
    break;
        case 6: Class_5(aMenu2);
    break;
        case 7: Class_6(aMenu2);
    break;
        case 8: Class_7(aMenu2);
    break;
        case 9: Class_8(aMenu2);
    break;
        case 10: Class_9(aMenu2);
    break;
        }
      }
    aMenu2.options[0].text="Choose a division"
    }

  /*  Uses a function that will asign the sections (3rd drop down menu) for each division (2nd drop down menu) */
  function changeSections()
    {
    aMenu=document.formDDC.sectionsDDC;
    aMenu2=document.formDDC.divisionsDDC;
    aMenu3=document.formDDC.classesDDC;
    noShow=0;

    /*  Divisions for class 0. Computer science, knowledge & systems */
    if (aMenu3.selectedIndex==1)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_0_0(aMenu);  /*  Call function Division_0_0 in case 1 */
      break;
    case 2: Division_0_1(aMenu);
      break;
    case 3: Division_0_2(aMenu);
      break;
    case 4: Division_0_3(aMenu);
      break;
    case 5: Division_0_4(aMenu);
      aMenu.options[0].text="Choose another division.";
      noShow=1;
      break;
    case 6: Division_0_5(aMenu);
      break;
    case 7: Division_0_6(aMenu);
      break;
    case 8: Division_0_7(aMenu);
      break;
    case 9: Division_0_8(aMenu);
      break;
    case 10: Division_0_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 1. Philosophy and psychology */
    if (aMenu3.selectedIndex==2)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_1_0(aMenu);
      break;
    case 2: Division_1_1(aMenu);
      break;
    case 3: Division_1_2(aMenu);
      break;
    case 4: Division_1_3(aMenu);
      break;
    case 5: Division_1_4(aMenu);
      break;
    case 6: Division_1_5(aMenu);
      break;
    case 7: Division_1_6(aMenu);
      break;
    case 8: Division_1_7(aMenu);
      break;
    case 9: Division_1_8(aMenu);
      break;
    case 10: Division_1_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 2. Religion */
    if (aMenu3.selectedIndex==3)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_2_0(aMenu);
      break;
    case 2: Division_2_1(aMenu);
      break;
    case 3: Division_2_2(aMenu);
      break;
    case 4: Division_2_3(aMenu);
      break;
    case 5: Division_2_4(aMenu);
      break;
    case 6: Division_2_5(aMenu);
      break;
    case 7: Division_2_6(aMenu);
      break;
    case 8: Division_2_7(aMenu);
      break;
    case 9: Division_2_8(aMenu);
      break;
    case 10: Division_2_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 3. Social sciences */
    if (aMenu3.selectedIndex==4)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_3_0(aMenu);
      break;
    case 2: Division_3_1(aMenu);
      break;
    case 3: Division_3_2(aMenu);
      break;
    case 4: Division_3_3(aMenu);
      break;
    case 5: Division_3_4(aMenu);
      break;
    case 6: Division_3_5(aMenu);
      break;
    case 7: Division_3_6(aMenu);
      break;
    case 8: Division_3_7(aMenu);
      break;
    case 9: Division_3_8(aMenu);
      break;
    case 10: Division_3_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 4. Language */
    if (aMenu3.selectedIndex==5)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_4_0(aMenu);
      break;
    case 2: Division_4_1(aMenu);
      break;
    case 3: Division_4_2(aMenu);
      break;
    case 4: Division_4_3(aMenu);
      break;
    case 5: Division_4_4(aMenu);
      break;
    case 6: Division_4_5(aMenu);
      break;
    case 7: Division_4_6(aMenu);
      break;
    case 8: Division_4_7(aMenu);
      break;
    case 9: Division_4_8(aMenu);
      break;
    case 10: Division_4_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 5. Science */
    if (aMenu3.selectedIndex==6)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_5_0(aMenu);
      break;
    case 2: Division_5_1(aMenu);
      break;
    case 3: Division_5_2(aMenu);
      break;
    case 4: Division_5_3(aMenu);
      break;
    case 5: Division_5_4(aMenu);
      break;
    case 6: Division_5_5(aMenu);
      break;
    case 7: Division_5_6(aMenu);
      break;
    case 8: Division_5_7(aMenu);
      break;
    case 9: Division_5_8(aMenu);
      break;
    case 10: Division_5_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 6. Technology */
    if (aMenu3.selectedIndex==7)
    {
    with (aMenu2)
      {
      switch (selectedIndex)
        {
        case 0: aMenu.options.length=0;
    aMenu.options[0]= new Option("Pages appear here","");
    aMenu.options[0].selected=true;
    history.go(0);
    break;
        case 1: Division_6_0(aMenu);
    break;
        case 2: Division_6_1(aMenu);
    break;
        case 3: Division_6_2(aMenu);
    break;
        case 4: Division_6_3(aMenu);
    break;
        case 5: Division_6_4(aMenu);
    break;
        case 6: Division_6_5(aMenu);
    break;
        case 7: Division_6_6(aMenu);
    break;
        case 8: Division_6_7(aMenu);
    break;
        case 9: Division_6_8(aMenu);
    break;
        case 10: Division_6_9(aMenu);
    break;
        }
      }
    }

    /*  Divisions for class 7. Arts */
    if (aMenu3.selectedIndex==8)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_7_0(aMenu);
      break;
    case 2: Division_7_1(aMenu);
      break;
    case 3: Division_7_2(aMenu);
      break;
    case 4: Division_7_3(aMenu);
      break;
    case 5: Division_7_4(aMenu);
      break;
    case 6: Division_7_5(aMenu);
      break;
    case 7: Division_7_6(aMenu);
      break;
    case 8: Division_7_7(aMenu);
      break;
    case 9: Division_7_8(aMenu);
      break;
    case 10: Division_7_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 8. Literature */
    if (aMenu3.selectedIndex==9)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_8_0(aMenu);
      break;
    case 2: Division_8_1(aMenu);
      break;
    case 3: Division_8_2(aMenu);
      break;
    case 4: Division_8_3(aMenu);
      break;
    case 5: Division_8_4(aMenu);
      break;
    case 6: Division_8_5(aMenu);
      break;
    case 7: Division_8_6(aMenu);
      break;
    case 8: Division_8_7(aMenu);
      break;
    case 9: Division_8_8(aMenu);
      break;
    case 10: Division_8_9(aMenu);
      break;
    }
        }
      }

    /*  Divisions for class 9. History, geography & biography */
    if (aMenu3.selectedIndex==10)
      {
      with (aMenu2)
        {
        switch (selectedIndex)
    {
    case 0: aMenu.options.length=0;
      aMenu.options[0]= new Option("Pages appear here","");
      aMenu.options[0].selected=true;
      history.go(0);
      break;
    case 1: Division_9_0(aMenu);
      break;
    case 2: Division_9_1(aMenu);
      break;
    case 3: Division_9_2(aMenu);
      break;
    case 4: Division_9_3(aMenu);
      break;
    case 5: Division_9_4(aMenu);
      break;
    case 6: Division_9_5(aMenu);
      break;
    case 7: Division_9_6(aMenu);
      break;
    case 8: Division_9_7(aMenu);
      break;
    case 9: Division_9_8(aMenu);
      break;
    case 10: Division_9_9(aMenu);
      break;
    }
        }
      }
    if (noShow == 0) aMenu.options[0].text="Choose a section";  /*  Set the default text for the 3rd drop down menu. */
    }
  /* END THE FUNCTION SELECTORS */
