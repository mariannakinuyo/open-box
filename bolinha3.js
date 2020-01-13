/* Define os dados a serem usados */
function _Flourish_unflattenInto(dest, src) {
  dest = dest || {};
  for (var k in src) {
    var t = dest;
    for (var i = k.indexOf("."), p = 0; i >= 0; i = k.indexOf(".", p = i + 1)) {
      var s = k.substring(p, i);
      if (!(s in t)) t[s] = {};
      t = t[s];
    }
    t[k.substring(p)] = src[k];
  }
  return dest;
}
var _Flourish_settings = {
  "hierarchy_layout": "treemap" // circlePacking
};
_Flourish_unflattenInto(window.template.state, _Flourish_settings);

var _Flourish_data_column_names = {
    "data": {
      "filter": "grande área",
      "nest_columns": ["área", "nome", "Título do artigo"], // "grande área",
      "size_columns": []
    }
  },
  _Flourish_data = {
    "data": [{
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Cristina Wayne Nogueira", "Diphenyl diselenide a janus-faced molecule"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Cristina Wayne Nogueira", "Toxicology and pharmacology of selenium: emphasis on synthetic organoselenium compounds"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Angela Terezinha de Souza Wyse", "Reduction of Hippocampal Na+, K+-ATPase Activity in Rats Subjected to an Experimental Model of Depression"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Angela Terezinha de Souza Wyse", "Reduction of Na+,K+-ATPase Activity in Hippocampus of Rats Subjected to Chemically Induced Hyperhomocysteinemia"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Helena Bonciani Nader", "Heparin sequences in the heparan sulfate chains of an endothelial cell proteoglycan."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Helena Bonciani Nader", "Heparin stimulates the synthesis and modifies the sulfation pattern of heparan sulfate proteoglycan from endothelial cells."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Maria Rosa Chitolina", "NTPDase and 5'‐nucleotidase activities in physiological and disease conditions: New perspectives for human health"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Maria Rosa Chitolina", "New Benzodiazepines Alter Acetylcholinesterase and ATPDase Activities"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Denise Maria Guimarães Freire", "Lipase production by Penicillium restrictum in solid-state fermentation using babassu oil cake as substrate"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Denise Maria Guimarães Freire", "Enzymatic pre-hydrolysis and anaerobic degradation of wastewaters with high fat contents"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Maria Aparecida Juliano", "Characterization of the substrate specificity of the major cysteine protease (cruzipain) from Trypanosoma cruzi using a portion-mixing combinatorial library and fluorogenic peptides."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Maria Aparecida Juliano", "Azido Acids in a Novel Method of Solid-Phase Peptide Synthesis."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Ohara Augusto", "Nitrogen dioxide and carbonate radical anion: two emerging radicals in biology"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Ohara Augusto", "The catalytic mechanism of cytochrome P-450. Spin-trapping evidence for one-electron substrate oxidation."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Luana Cassandra Breitenbach Barroso Coelho", "Simple method to purify milligram quantities of the galactose‐specific lectin from the leaves of Bauhinia monandra"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Luana Cassandra Breitenbach Barroso Coelho", "Lectins, versatile proteins of recognition: a review"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Carla Denise Bonan", "Changes in synaptosomal ectonucleotidase activities in two rat models of temporal lobe epilepsy"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Carla Denise Bonan", "Inhibitory Avoidance Learning Inhibits Ectonucleotidases Activities in Hippocampal Synaptosomes of Adult Rats"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Célia Maria de Almeida Soares", "Alpha- and beta-tubulin mRNAs of Trypanosoma cruzi originate from a single multicistronic transcript."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Célia Maria de Almeida Soares", "Swine and Poultry Pathogens: the Complete Genome Sequences of Two Strains of Mycoplasma hyopneumoniae and a Strain of Mycoplasma synoviae"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Suely Vilela", "Heterologous expression and biochemical and functional characterization of a recombinant alpha-type myotoxin inhibitor from Bothrops alternatus snake"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Suely Vilela", "Galatrox is a C-type lectin in Bothrops atrox snake venom that selectively binds LacNAc-terminated glycans and can induce acute inflammation"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Marisa Helena Gennari de Medeiros", "Singlet Molecular Oxygen Generated from Lipid Hydroperoxides by the Russell Mechanism: Studies Using 18O-Labeled Linoleic Acid Hydroperoxide and Monomol Light Emission Measurements"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Marisa Helena Gennari de Medeiros", "Exocyclic DNA Adducts as Biomarkers of Lipid Oxidation and Predictors of Disease. Challenges in Developing Sensitive and Specific Methods for Clinical Studies"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Shirley Schreier", "Surface active drugs: self-association and interaction with membranes and surfactants. Physicochemical and biological aspects"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Shirley Schreier", "A spin probe study of the influence of cholesterol on motion and orientation of phospholipids in oriented multibilayers and vesicles."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Ana Maria Oliveira Battastini", "In vivo glioblastoma growth is reduced by apyrase activity in a rat glioma model"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Bioquímica", "Ana Maria Oliveira Battastini", "Solubilization and characterization of an ATP diphosphohydrolase (EC 3.6.1.5) from rat brain synaptic plasma membranes."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Ecologia", "Leticia Veras Costa Lotufo", "Chemical profiling of two congeneric sea mat corals along the Brazilian coast: adaptive and functional patterns"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Monica Levy Andersen", "Endocrinological and catecholaminergic alterations during sleep deprivation and recovery in male rats"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Monica Levy Andersen", "Does male sexual behavior require progesterone?"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Rita de Cassia Aleixo Tostes Passaglia", "Deoxycorticosterone acetate-salt hypertensive rats display gender-related differences in ETB receptor-mediated vascular responses"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Rita de Cassia Aleixo Tostes Passaglia", "Sarcoplasmic reticulum Ca2+ uptake is not decreased in aorta from deoxycorticosterone acetate hypertensive rats: functional assessment with cyclopiazonic acid."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Patricia Torres Bozza Viola", "Leukocyte lipid bodies — Biogenesis and functions in inflammation"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Patricia Torres Bozza Viola", "Eosinophil Lipid Bodies: Specific, Inducible Intracellular Sites for Enhanced Eicosanoid Formation"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Leticia Veras Costa Lotufo", "Studies of the anticancer potential of plants used in Bangladeshi folk medicine"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Lúcia Helena Faccioli", "Recombinant interleukin-1 and tumor necrosis factor induce neutrophil migration \"in vivo\" by indirect mechanisms."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Claudia do Ó Pessoa", "MÉTODO PARA O ESTUDO IN VIVO DA ANGIOGÊNESE: INDUÇÃO DE NEOVASCULARIZAÇÃO NA CÓRNEA DE COELHO"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Claudia do Ó Pessoa", "Antiproliferative effects of compounds derived from plants of Northeast Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Patricia Machado Rodrigues e Silva Martins", "Local anaesthetic medication for the treatment of asthma"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Patricia Machado Rodrigues e Silva Martins", "Generation of an eosinophilotactic activity in the pleural cavity of platelet-activating factor-injected rats."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Zuleica Bruno Fortes", "Influence of diabetes on the reactivity of mesenteric microvessels to histamine, bradykinin and acetylcholine."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Zuleica Bruno Fortes", "Direct Vital Microscopic Study of Defective Leukocyte-Endothelial Interaction in Diabetes Mellitus"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Vera Maria Melchiors Morsch", "Aluminum affects neural phenotype determination of embryonic neural progenitor cells"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Vera Maria Melchiors Morsch", "Aluminum: Interaction with Nucleotides and Nucleotidases and Analytical Aspects of Its Determination"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Sandra Helena Poliselli Farsky", "Secreted glucocorticoids regulate leukocyte-endothelial interactions in inflammation. A direct vital microscopic study."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Sandra Helena Poliselli Farsky", "Leukocyte response induced by Bothrops jararaca crude venom: In vivo and in vitro studies"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Maria Martha Campos", "Non-peptide antagonists for kinin B1 receptors: new insights into their therapeutic potential for the management of inflammation and pain"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia", "Maria Martha Campos", "Antidepressant-like effects of Trichilia catigua (Catuaba) extract: evidence for dopaminergic-mediated mechanisms."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia bioquímica", "Ana Lúcia Severo Rodrigues", "Agmatine produces antidepressant-like effects in two models of depression in mice"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Farmacologia bioquímica", "Ana Lúcia Severo Rodrigues", "Involvement of monoaminergic system in the antidepressant-like effect of the hydroalcoholic extract of Siphocampylus verticillatus"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Patricia Rieken Macedo Rocco", "Lung Tissue Mechanics and Extracellular Matrix Remodeling in Acute Lung Injury"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Patricia Rieken Macedo Rocco", "Modelling the mechanical effects of tracheal tubes in normal subjects"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Elaine Aparecida Del Bel Belluz Guimarães", "Role of Nitric Oxide on Motor Behavior"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Elaine Aparecida Del Bel Belluz Guimarães", "Sub-chronic inhibition of nitric-oxide synthesis modifies haloperidol-induced catalepsy and the number of NADPH-diaphorase neurons in mice"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Maria Claudia Costa Irigoyen", "Menopause, estrogens, and endothelial dysfunction: current concepts."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Maria Claudia Costa Irigoyen", "Autonomic dysfunction in short-term experimental diabetes."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Patrícia Cristina Lisbôa da Silva", "Effects of estradiol benzoate on 5'-iodothyronine deiodinase activities in female rat anterior pituitary gland, liver and thyroid gland"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia", "Patrícia Cristina Lisbôa da Silva", "Sex Steroids Modulate Rat Anterior Pituitary and Liver Iodothyronine Deiodinase Activities"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia do esforço", "Cláudia Lúcia de Moraes Forjaz", "Factors affecting post-exercise hypotension in normotensive and hypertensive humans."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia do esforço", "Cláudia Lúcia de Moraes Forjaz", "A duração do exercício determina a magnitude e a duração da hipotensão pós-exercício"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia e Educação Física", "Kátia De Angelis", "Exercise training changes autonomic cardiovascular balance in mice."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Fisiologia e Educação Física", "Kátia De Angelis", "Efeitos fisiológicos do treinamento físico em pacientes portadores de diabetes tipo 1"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Janete Maria Cerutti", "A preoperative diagnostic test that distinguishes benign from malignant thyroid carcinoma based on gene expression"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Janete Maria Cerutti", "High prevalence of BRAF mutation in a Brazilian cohort of patients with sporadic papillary thyroid carcinomas"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Leonor Gusmão", "DNA Commission of the International Society of Forensic Genetics (ISFG): an update of the recommendations on the use of Y-STRs in forensic analysis"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Leonor Gusmão", "A GEP-ISFG collaborative study on the optimization of an X-STR decaplex: data on 15 Iberian and Latin American populations"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Mariza de Andrade", "Apparent heterozygote deficiencies observed in DNA typing data and their implications in forensic applications."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Mariza de Andrade", "Identifying disease modifying genes in multiple sclerosis."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Suely Kazue Nagahashi Marie", "Maternal embryonic leucine zipper kinase transcript abundance correlates with malignancy grade in human astrocytomas"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Suely Kazue Nagahashi Marie", "Metabolism and brain cancer"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Ana Tereza Ribeiro de Vasconcelos", "The complete genome sequence of Chromobacterium violaceum reveals remarkable and exploitable bacterial adaptability"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Ana Tereza Ribeiro de Vasconcelos", "Short interrupted palindromes on the extragenic DNA of Escherichia coli K-12, Haemophilus influenzae and Neisseria meningitidis."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Juliana da Silva", "DNA damage induced by occupational and environmental exposure to miscellaneous chemicals"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética", "Juliana da Silva", "The HUman MicroNucleus project on eXfoLiated buccal cells (HUMNXL): The role of life-style, host factors, occupational exposures, health status, and assay protocol"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética Humana e Médica", "Mayana Zatz", "The Sarcoglycan Complex in the Six Autosomal Recessive Limb-Girdle Muscular Dystrophies"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Genética Humana e Médica", "Mayana Zatz", "Linkage analysis in autosomal recessive limb-girdle muscular dystrophy (AR LGMD) maps a sixth form to 5q33-34 (LGMD2F) and indicates that there is at least one more subtype of AR LGMD.\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Imunologia", "Denise Vilarinho Tambourgi", "Loxosceles intermedia spider envenomation induces activation of an endogenous metalloproteinase, resulting in cleavage of glycophorins from the erythrocyte surface and facilitating complement-mediated lysis."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Imunologia", "Denise Vilarinho Tambourgi", "Loxosceles Sphingomyelinase Induces Complement-Dependent Dermonecrosis, Neutrophil Infiltration, and Endogenous Gelatinase Expression"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Imunologia", "Fátima Ferreira-Briza", "Allergic cross‐reactivity: from gene to the clinic"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Imunologia", "Fátima Ferreira-Briza", "Dissection of immunoglobulin E and T lymphocyte reactivity of isoforms of the major birch pollen allergen Bet v 1: potential use of hypoallergenic isoforms for immunotherapy."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Luisa Lina Villa", "Prophylactic quadrivalent human papillomavirus (types 6, 11, 16, and 18) L1 virus-like particle vaccine in young women: a randomised double-blind placebo-controlled multicentre phase II efficacy trial"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Luisa Lina Villa", "High sustained efficacy of a prophylactic quadrivalent human papillomavirus types 6/11/16/18 L1 virus-like particle vaccine through 5 years of follow-up"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Erna Geessien Kroon", "Zoonotic Brazilian Vaccinia virus: From field to therapy"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Erna Geessien Kroon", "Lethal encephalitis in myeloid differentiation factor 88-deficient mice infected with herpes simplex virus 1."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Ester Cerdeira Sabino", "Ten-Year Incidence of Chagas Cardiomyopathy Among Asymptomatic Trypanosoma cruzi–Seropositive Former Blood Donors"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Ester Cerdeira Sabino", "Identification of human immunodeficiency virus type 1 envelope genes recombinant between subtypes B and F in two epidemiologically linked individuals from Brazil."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Helena Carla Castro", "HIV-1 reverse transcriptase: a therapeutical target in the spotlight."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Microbiologia", "Helena Carla Castro", "CURRENT STATUS OF SNAKE VENOM THROMBIN-LIKE ENZYMES"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Morfologia", "Gerly Anne de Castro Brito", "Clostridium difficile Toxin A Alters In Vitro-Adherent Neutrophil Morphology and Function"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Morfologia", "Gerly Anne de Castro Brito", "Mechanism of Clostridium difficile Toxin A–Induced Apoptosis in T84 Cells"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Parasitologia", "Lúcia Helena Faccioli", "IL-5 drives eosinophils from bone marrow to blood and tissues in a guinea-pig model of visceral larva migrans syndrome"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Parasitologia", "Marinete Marins Povoa", "Malaria Vectors in the Municipality of Serra do Navio, State of Amapá, Amazon Region, Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Parasitologia", "Marinete Marins Povoa", "Pfmdr1Asn1042AspandAsp1246TyrPolymorphisms, Thought to Be Associated with Chloroquine Resistance, Are Present in Chloroquine-Resistant and -Sensitive Brazilian Field Isolates ofPlasmodium falciparum"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Parasitologia", "Milena Botelho Pereira Soares", "Immunopathology of Cardiomyopathy in the Experimental Chagas Disease"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Parasitologia", "Milena Botelho Pereira Soares", "Gene Expression Changes Associated with Myocarditis and Fibrosis in Hearts of Mice with Chronic Chagasic Cardiomyopathy"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Protozoologia de parasitos", "Aldina Maria Prado Barral", "Leishmaniasis in Bahia, Brazil: evidence that Leishmania amazonensis produces a wide spectrum of clinical disease."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Protozoologia de parasitos", "Aldina Maria Prado Barral", "Transforming growth factor beta as a virulence mechanism for Leishmania braziliensis."],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Zoologia", "Neusa Hamada", "Cytotaxonomy of four species in the Simulium perflavum species group (Diptera: Simuliidae) from Brazilian Amazonia"],
      "size_columns": []
    }, {
      "filter": "ciências biológicas",
      "nest_columns": ["Zoologia", "Neusa Hamada", "Species richness and spatial distribution of blackflies (Diptera: Simuliidae) in streams of Central Amazonia, Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Educação Física", "Patricia Chakur Brum", "Differential targeting and function of alpha2A and alpha2C adrenergic receptor subtypes in cultured sympathetic neurons."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Educação Física", "Patricia Chakur Brum", "Abnormal cardiac function associated with sympathetic nervous system hyperactivity in mice"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Endocrinologia", "Berenice Bilharinho de Mendonça", "Longitudinal hormonal and pituitary imaging changes in two females with combined pituitary hormone deficiency due to deletion of A301,G302 in the PROP1 gene."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Enfermagem", "Cristina Maria Garcia de Lima Parada", "Avaliação da assistência pré-natal e puerperal desenvolvidas em região do interior do Estado de São Paulo em 2005"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Enfermagem", "Cristina Maria Garcia de Lima Parada", "Complementary feeding practices to children during their first year of life"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Epidemiologia", "Iná da Silva dos Santos", "The challenge of reducing neonatal mortality in middle-income countries: findings from three Brazilian birth cohorts in 1982, 1993, and 2004"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Epidemiologia", "Iná da Silva dos Santos", "Caffeine intake and low birth weight: a population-based case-control study."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Epidemiologia", "Maria Fernanda Furtado de Lima e Costa", "Chagas Disease Predicts 10-Year Stroke Mortality in Community-Dwelling Elderly"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Epidemiologia", "Maria Fernanda Furtado de Lima e Costa", "Genomic ancestry and ethnoracial self-classification based on 5,871 community-dwelling Brazilians (The Epigen Initiative)"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Farmácia", "Adriana Raffin Pohlmann", "Spray-dried indomethacin-loaded polyester nanocapsules and nanospheres: development, stability evaluation and nanostructure models"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Farmácia", "Adriana Raffin Pohlmann", "Physico-chemical characterization of nanocapsule polymeric wall using fluorescent benzazole probes"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Farmácia", "Sílvia Stanisçuaski Guterres", "Poly (DL-lactide) nanocapsules containing diclofenac: I. Formulation and stability study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Farmácia", "Sílvia Stanisçuaski Guterres", "Gastrointestinal tolerance after oral administration of spray-dried diclofenac-loaded nanocapsules and nanospheres."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Fonoudiologia", "Mara Suzana Behlau", "Quality of life: validation of the Brazilian version of the voice-related quality of life (V-RQOL) measure."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Fonoudiologia", "Mara Suzana Behlau", "Morphological and functional aspects of the senile larynx."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Ginecologia", "Silvana Maria Quintana", "Race, ethnicity, and culture in child development: contemporary research and future directions."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Ginecologia", "Silvana Maria Quintana", "Improved cure of bacterial vaginosis with single dose of tinidazole (2 g), Lactobacillus rhamnosus GR-1, and Lactobacillus reuteri RC-14: a randomized, double-blind, placebo-controlled trial"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Imunologia", "Eloisa Silva Dutra de Oliveira Bonfá", "Association between Lupus Psychosis and Antiribosomal P Protein Antibodies"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Imunologia", "Eloisa Silva Dutra de Oliveira Bonfá", "Clinical and serologic associations of the antiribosomal P protein antibody"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Infectologia", "Beatriz Gilda Jegerhorn Grinsztejn", "Safety and efficacy of the HIV-1 integrase inhibitor raltegravir (MK-0518) in treatment-experienced patients with multidrug-resistant virus: a phase II randomised controlled trial"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Infectologia", "Beatriz Gilda Jegerhorn Grinsztejn", "Effects of early versus delayed initiation of antiretroviral treatment on clinical outcomes of HIV-1 infection: results from the phase 3 HPTN 052 randomised controlled trial"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ana Maria Baptista Menezes", "International variation in the prevalence of COPD (The BOLD Study): a population-based prevalence study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ana Maria Baptista Menezes", "Alcohol drinking in never users of tobacco, cigarette smoking in never drinkers, and the risk of head and neck cancer: pooled analysis in the International Head and Neck Cancer Epidemiology Consortium."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Lydia Masako Ferreira", "Control of the skin scarring response"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Lydia Masako Ferreira", "Proliferation of fibroblasts cultured on a hemi-cellulose dressing"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Sheila Knupp Feitosa de Oliveira", "Proxy-reported health-related quality of life of patients with juvenile idiopathic arthritis: the Pediatric Rheumatology International Trials Organization multinational quality of life cohort study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Sheila Knupp Feitosa de Oliveira", "A randomized trial of parenteral methotrexate comparing an intermediate dose with a higher dose in children with juvenile idiopathic arthritis who failed to respond to standard doses of methotrexate."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Rosa Maria Rodrigues Pereira", "Metabolic syndrome in rheumatological diseases"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Rosa Maria Rodrigues Pereira", "Cortisol inhibits the differentiation and apoptosis of osteoblasts in culture"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Berenice Bilharinho de Mendonça", "Adrenocortical carcinoma"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Laura Sterian Ward", "Usefulness of HBME‐1, cytokeratin 19 and galectin‐3 immunostaining in the diagnosis of thyroid malignancy"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Laura Sterian Ward", "Studies of allelic loss in thyroid tumors reveal major differences in chromosomal instability between papillary and follicular carcinomas."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Isabela Judith Martins Bensenor", "Low-Dose Aspirin for Migraine Prophylaxis in Women"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Isabela Judith Martins Bensenor", "Subclinical hyperthyroidism and dementia: the Sao Paulo Ageing & Health Study (SPAH)"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Dulciene Maria de Magalhães Queiroz", "Association between Helicobacter and gastric ulcer disease of the pars esophagea in swine."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Dulciene Maria de Magalhães Queiroz", "Indicator medium for isolation of Campylobacter pylori."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Angelita Habr-Gama", "Patterns of Failure and Survival for Nonoperative Treatment of Stage c0 Distal Rectal Cancer Following Neoadjuvant Chemoradiation Therapy"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Angelita Habr-Gama", "Low rectal cancer: Impact of radiation and chemotherapy on surgical treatment"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Amanda Guerra de Moraes Rego Sousa", "Long-term clinical outcomes of the Drug-Eluting Stents in the Real World (DESIRE) Registry."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Amanda Guerra de Moraes Rego Sousa", "Intervenções Percutâneas para Revascularização do Miocárdio no Brasil em 1996 e 1997 Comparadas às do Biênio 1992 e 1993. Relatório do Registro CENIC (Central Nacional de Intervenções Cardiovasculares)"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Maria Inês Schmidt", "Markers of inflammation and prediction of diabetes mellitus in adults (Atherosclerosis Risk in Communities study): a cohort study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vera Luiza Capelozzi", "Large cell carcinoma of the lung. Ultrastructural and immunohistochemical features."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vera Luiza Capelozzi", "Quantitation in inflammatory pleural disease to distinguish tuberculous and paramalignant from chronic non-specific pleuritis."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Maria Cristina de Oliveira Izar", "Nutrigenomics and nutrigenetics"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Maria Cristina de Oliveira Izar", "Phytosterols and phytosterolemia: gene–diet interactions"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vanda Jorgetti", "Adverse effects of hyperphosphatemia on myocardial hypertrophy, renal function, and bone in rats with renal failure"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vanda Jorgetti", "Effects of thyroid hormone administration and estrogen deficiency on bone mass of female rats."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ida Vanessa Doederlein Schwartz", "A clinical study of 77 patients with mucopolysaccharidosis type II."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ida Vanessa Doederlein Schwartz", "Brain MRI in mucopolysaccharidosis: effect of aging and correlation with biochemical findings."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vera Lucia Szejnfeld", "Systemic osteopenia and mineralization defect in patients with ankylosing spondylitis."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Vera Lucia Szejnfeld", "Diretrizes para prevenção e tratamento da osteoporose induzida por glicocorticoide"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Sandra Roberta Gouvea Ferreira Vivolo", "Population-based incidence of IDDM in the state of São Paulo, Brazil."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Sandra Roberta Gouvea Ferreira Vivolo", "Disturbances of glucose and lipid metabolism in first and second generation Japanese-Brazilians. Japanese-Brazilian Diabetes Study Group."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Luciana Rodrigues Silva", "Bone Mineralization in Young Patients with Type 1 Diabetes Mellitus and Screening-identified Evidence of Celiac Disease"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Luciana Rodrigues Silva", "Hábitos alimentares de crianças menores de 1 ano amamentadas e não-amamentadas."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ana Cristina Gales", "Contemporary assessment of antimicrobial susceptibility testing methods for polymyxin B and colistin: review of available interpretative criteria and quality control guidelines."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Ana Cristina Gales", "Dissemination in distinct Brazilian regions of an epidemic carbapenem-resistant Pseudomonas aeruginosa producing SPM metallo-beta-lactamase."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Joyce Maria Annichino-Bizzacchi", "Polymorphisms in the methylenetetrahydrofolate reductase and methionine synthase reductase genes and homocysteine levels in Brazilian children"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Joyce Maria Annichino-Bizzacchi", "Frequencies of platelet‐specific alloantigen systems 1–5 in three distinct ethnic groups in Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Angela Maggio da Fonseca", "Impact of age and body mass on the intensity of menopausal symptoms in 5968 Brazilian women"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Angela Maggio da Fonseca", "Avaliação da capacidade orgástica em mulheres na pós-menopausa"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Euzenir Nunes Sarno", "Impact of PGL-I Seropositivity on the Protective Effect of BCG Vaccination among Leprosy Contacts: A Cohort Study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Medicina", "Euzenir Nunes Sarno", "HIV-M. leprae interaction: can HAART modify the course of leprosy?"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nefrologia", "Irene de Lourdes Noronha", "In situ production of TNF-alpha, IL-1 beta and IL-2R in ANCA-positive glomerulonephritis."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nefrologia", "Irene de Lourdes Noronha", "IN SITU EXPRESSION OF TUMOR NECROSIS FACTOR-ALPHA, INTERFERON-GAMMA, AND INTERLEUKIN-2 RECEPTORS IN RENAL ALLOGRAFT BIOPSIES"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Neonatologia", "Ruth Guinsburg", "Physiological, hormonal, and behavioral responses to a single fentanyl dose in intubated and ventilated preterm neonates"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Neonatologia", "Ruth Guinsburg", "Differences in pain expression between male and female newborn infants"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Maria Isabel Toulson Davisson Correia", "The impact of malnutrition on morbidity, mortality, length of hospital stay and costs evaluated through a multivariate model analysis"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Maria Isabel Toulson Davisson Correia", "Prevalence of hospital malnutrition in Latin America:: The multicenter ELAN study"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Telma Maria Braga Costa", "Translation and Cross-Cultural Adaptation of a Brazilian Version of the Child Feeding Questionnaire"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Telma Maria Braga Costa", "Effect of zinc deficiency induced before and during pregnancy on the survival of female rats and their pups."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Rosely Sichieri", "Validity of a Brazilian food frequency questionnaire against dietary recalls and estimated energy intake"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Rosely Sichieri", "Dietary patterns and their associations with obesity in the Brazilian city of Rio de Janeiro."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Denise Petrucci Gigante", "Breast-feeding has a limited long-term effect on anthropometry and body composition of Brazilian mothers."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Nutrição", "Denise Petrucci Gigante", "Nutrição materna e duração da amamentação em uma coorte de nascimento de Pelotas, RS."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Brenda Paula Figueiredo de Almeida Gomes", "Microbiomes of Endodontic-Periodontal Lesions before and after Chemomechanical Preparation."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Brenda Paula Figueiredo de Almeida Gomes", "Microorganisms from canals of root-filled teeth with periapical lesions"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Alessandra Reis", "Durability of resin dentin interfaces: effects of surface moisture and adhesive solvent component"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Alessandra Reis", "Effect of smear layer thickness and acidity of self-etching solutions on early and long-term bond strength to dentin"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Josimeri Hebling Costa", "Chlorhexidine Arrests Subclinical Degradation of Dentin Hybrid Layers in vivo"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Josimeri Hebling Costa", "Biocompatibility of an adhesive system applied to exposed human dental pulp."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Marília Afonso Rabelo Buzalaf", "Saliva and dental erosion"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Marília Afonso Rabelo Buzalaf", "The role of matrix metalloproteinases in dental erosion."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Marcia Martins Marques", "Effect of low‐power laser irradiation on protein synthesis and ultrastructure of human gingival fibroblasts†"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Marcia Martins Marques", "Comparison of the low level laser therapy effects on cultured human gingival fibroblasts proliferation using different irradiance and same fluence"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Regina Guenka Palma Dibb", "Bond strength to dentin with artificial carious lesions: influence of caries detecting dye."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Odontologia", "Regina Guenka Palma Dibb", "Bond strength of glass-ionomer cements to caries-affected dentin."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Oftamologia", "Luciene Barbosa de Sousa", "Contrast sensitivity in deep anterior lamellar keratoplasty versus penetrating keratoplasty"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Oftamologia", "Luciene Barbosa de Sousa", "Deep anterior lamellar transplant using lyophilized and Optisol corneas in patients with keratoconus."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Ortopedia", "Patrícia Maria de Moraes Barros Fucs", "Treatment of the painful chronically dislocated and subluxated hip in cerebral palsy with hip arthrodesis."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Ortopedia", "Patrícia Maria de Moraes Barros Fucs", "Quadricepsplasty in arthrogryposis (amyoplasia): long-term follow-up."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Deborah Carvalho Malta", "Mortes evitáveis em menores de um ano, Brasil, 1997 a 2006: contribuições para a avaliação de desempenho do Sistema Único de Saúde"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Deborah Carvalho Malta", "O percurso da linha do cuidado sob a perspectiva das doenças crônicas não transmissíveis"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Maria Inês Schmidt", "Academic medicine as a resource for global health: the case of Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Sandra Cristina Pereira Costa Fuchs", "Effectiveness of Chlorthalidone Plus Amiloride for the Prevention of Hypertension: The PREVER‐Prevention Randomized Clinical Trial"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Sandra Cristina Pereira Costa Fuchs", "Modelo hierarquizado: uma proposta de modelagem aplicada à investigação de fatores de risco para diarréia grave"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Maria Cecilia de Souza Minayo", "Possibilidades e dificuldades nas relações entre ciências sociais e epidemiologia"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Maria Cecilia de Souza Minayo", "Violência contra idosos: relevância para um velho problema."],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Marilia Sa Carvalho", "Modeling of Under-detection of Cases in Disease Surveillance"],
      "size_columns": []
    }, {
      "filter": "ciências da saúde",
      "nest_columns": ["Saúde Coletiva", "Marilia Sa Carvalho", "Modelling discrete time survival data with random slopes: evaluating haemodialysis centres"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Astronomia", "Thaisa Storchi Bergmann", "Nuclear Rings in Active Galaxies"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Astronomia", "Thaisa Storchi Bergmann", "Double-peaked Broad Line Emission from the LINER Nucleus of NGC 1097"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Ciência da Computação", "Carmen Lucia Lodi Maidantchik", "Tile-in-ONE: A web platform which integrates Tile Calorimeter data quality and calibration assessment"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Ciência da Computação", "Carmen Lucia Lodi Maidantchik", "An object-oriented approach to deploying highly configurable Web interfaces for the ATLAS experiment"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Ciência da Computação", "Teresa Bernarda Ludermir", "An Optimization Methodology for Neural Network Weights and Architectures"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Ciência da Computação", "Teresa Bernarda Ludermir", "On a hybrid weightless neural system"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Elena Pol", "Measurement of the differential cross section dσ/dt in elastic p¯p scattering at √s=1.96  TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Elena Pol", "The CMS experiment at the CERN LHC\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marcia Begalli", "Searches for supersymmetric particles in e + e- collisions up to 208 GeV and interpretation of the results within the MSSM"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marcia Begalli", "Study of final state photons in hadronic Z0 decay and limits on new phenomena"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sandra dos Santos Padula", "Analytic approximations for inside-outside interferometry"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sandra dos Santos Padula", "Pion interferometric tests of transport models"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marisilvia Donadelli", "Searches for Higgs boson pair production in the hh→bbττ, γγWW∗, γγbb, bbbb channels with the ATLAS detector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marisilvia Donadelli", "Search for Higgs boson pair production in the bb¯bb¯bb¯bb¯ final state from pp collisions at s√=8s=8 TeVwith the ATLAS detector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Carla Gobel Burlamaqui de Mello", "Dalitz plot analysis of the decay D(+)-->K(-)pi(+)pi(+) and indication of a low-mass scalar Kpi resonance."],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Carla Gobel Burlamaqui de Mello", "Search for CP violation in D+→K-K+π+ decays"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Eliza Melo da Costa", "Determination of jet energy calibration and transverse momentum resolution in CMS"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Eliza Melo da Costa", "Search for the Standard Model Higgs Boson in the Decay Channel H→ZZ→4l in pp Collisions at √s=7  TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sandra Filippa Amato", "Precision Electroweak Measurements on the Z Resonance"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sandra Filippa Amato", "The LHCb Detector at the LHC"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Miriam Mendes Gandelman", "The DELPHI silicon strip microvertex detector with double sided readout"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Miriam Mendes Gandelman", "Performance of the DELPHI detector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Analu Verçosa Custódio", "Observation of a new boson at a mass of 125 GeV with the CMS experiment at the LHC"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Analu Verçosa Custódio", "Precise determination of the mass of the Higgs boson and tests of compatibility of its couplings with the standard model predictions using proton collisions at 7 and 8"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Clemencia Rosario Mora Herrera", "Measurements of the electron and muon inclusive cross-sections in proton–proton collisions at s=7TeV with the ATLAS detector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Clemencia Rosario Mora Herrera", "Neutrino masses in split supersymmetry"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Erica Ribeiro Polycarpo Macedo", "Review of recent results on charm mixing and CP violation"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Erica Ribeiro Polycarpo Macedo", "Performance of the Muon Identification at LHCb"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Patricia Rebello Teles", "Event generator tunes obtained from underlying event and multiparton scattering measurements"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Patricia Rebello Teles", "Evidence for exclusive γγ → W + W − production and constraints on anomalous quartic gauge couplings in pp collisions at s√=7s=7 and 8 TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Irina Nasteva", "Detecting the standard model Higgs bosonin the WW decay channel using forward proton tagging at the LHC"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Irina Nasteva", "Probing new physics models of neutrinoless double beta decay with SuperNEMO"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Wanda Lucia Prado da Silva", "Observation of a new boson with mass near 125 GeV in pp collisions at   s√=7  and 8 TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Wanda Lucia Prado da Silva", "Combined results of searches for the standard model Higgs boson in pp collisions at s√ = 7 TeV."],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Jussara Marques de Miranda", "Experimental evidence for a light and broad scalar resonance in D+® p-p+p+ decay"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Jussara Marques de Miranda", "Direct measurement of the pion valence-quark momentum distribution, the pion light-cone wave function squared."],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Yara do Amaral Coutinho", "Gauge model for testing compositeness in electron-positron collisions"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Yara do Amaral Coutinho", "Single heavy lepton production in hadron-hadron collisions\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Emi Marcia Takagui", "Elastic and inelastic scattering of 16O by 92Zr at energies near the Coulomb barrier"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Emi Marcia Takagui", "Correlated production of p and p ¯ in Au + Au collisions at s N N = 200 GeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Flavia de Almeida Dias", "Combined results of searches for the standard model Higgs boson in pp collisions at"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Flavia de Almeida Dias", "Observation of long-range, near-side angular correlations in pPb collisions at the LHC☆\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marcia Cristina Bernardes Barbosa", "A stable local density functional approach to ion-ion correlations"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marcia Cristina Bernardes Barbosa", "Phase boundaries near critical end points. II. General spherical models"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Elisa Maria Baggio Saitovitch", "Theoretical and experimental study of a-Sn deposited on CdTe„001…"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Elisa Maria Baggio Saitovitch", "Effect of interface intermixing on giant magnetoresistance in NiFe/Cu and Co/NiFe/Co/Cu multilayers"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Beatriz de Leone Gay Ducati", "Diffraction and the gluon mass"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Beatriz de Leone Gay Ducati", "Estimate of the single diffractive heavy quark production in heavy ion collisions at the CERN LHC\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Renata Zukanovich Funchal", "Search for light neutral Higgs particles produced in Z0-decays"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Renata Zukanovich Funchal", "Atmospheric Neutrino Observations and Flavor Changing Interactions"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Danielle Magalhães Moraes", "Development of the CARIOCA front-end chip for the LHCb muon detector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Danielle Magalhães Moraes", "A Novel Time-Based Readout Scheme for a Combined PET-CT Detector Using APDs"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Magdalena Malek", "ALICE: Physics Performance Report, Volume II\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Magdalena Malek", "Search for supersymmetry in pp collisions at 7 TeV in events with jets and missing transverse energy"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sheila Mara Silva do Amaral", "Transverse-momentum and pseudorapidity distributions of charged hadrons in pp collisions at s√=0.9s=0.9 and 2.36 TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Sheila Mara Silva do Amaral", "Measurement of the inclusive production cross sections for forward jets and for dijet events with one forward and one central jet in pp collisions at s√=7s=7 TeV"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Debora Peres Menezes", "Hybrid stars in the quark-meson coupling model with superconducting quark matter"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Debora Peres Menezes", "Quark matter under strong magnetic fields in the su(3) Nambu–Jona-Lasinio model"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marina Nielsen", "New charmonium states in QCD sum rules: A concise review"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Marina Nielsen", "Charged exotic charmonium states"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Denise Maria Zezell", "Nd:YAG laser in caries prevention: A clinical trial"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Denise Maria Zezell", "Infrared Absorption Bands of Enamel and Dentin Tissues from Human and Bovine Teeth"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Aline Barros do Vale", "Signature for heavy Majorana neutrinos in hadronic collisions"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Maria Aline Barros do Vale", "Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Danielle Martins Tostes", "Search for CP violation in D+→K−K+π+ decays"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Física", "Danielle Martins Tostes", "Implications of LHCb measurements and future prospects"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Geociências", "Inez Staciarini Batista", "Ionospheric effects of the March 13, 1989, magnetic storm at low and equatorial latitudes"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Geociências", "Inez Staciarini Batista", "Equatorial F region vertical plasma drifts: Seasonal and longitudinal asymmetries in the American sector"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Probabilidade e Estatística", "Maria do Rosario Dias de Oliveira Latorre", "Análise de séries temporais em epidemiologia: uma introdução sobre os aspectos metodológicos"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Probabilidade e Estatística", "Maria do Rosario Dias de Oliveira Latorre", "A mortalidade por câncer de estômago no Brasil: análise do período de 1977 a 1989"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Valnice Boldrin", "Determination of the vinylsulphone azo dye, remazol brilliant orange 3R, by cathodic stripping voltammetry"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Valnice Boldrin", "Photoelectrocatalytic oxidation of remazol turquoise blue and toxicological assessment of its oxidation products"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Susana Ines Cordoba de Torresi", "Determination of the Formation of Ladder Structure in Poly(5-amino-1-naphthol) by Resonant Raman and XPS Characterization"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Susana Ines Cordoba de Torresi", "Synthesis, characterization and immobilization of Prussian blue nanoparticles. A potential tool for biosensing devices†\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Fatima das Gracas Fernandes da Silva", "Sesquiterpenes, triterpenoids, limonoids and flavonoids of Cedrela odorata graft and speculations on the induced resistance against Hypsipyla grandella"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Fatima das Gracas Fernandes da Silva", "Norlimonoids from seeds of toona ciliata\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Marilia Oliveira Fonseca Goulart", "Trypanocidal activity and redox potential of heterocyclic- and 2-hydroxy-naphthoquinones"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Marilia Oliveira Fonseca Goulart", "Electroorganic reactions. 31. Quinonemethide radical anions and dianions. Their cathodic generation and reactivity"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Marcia Laudelina Arruda Temperini", "Influence of Thermal Treatment on Doped Polyaniline Studied by Resonance Raman Spectroscopy"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Marcia Laudelina Arruda Temperini", "Aniline Polymerization into Montmorillonite Clay: A Spectroscopic Investigation of the Intercalated Conducting Polymer"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Teresa Dib Zambon Atvars", "Direct determination of paracetamol in powdered pharmaceutical samples by fluorescence spectroscopy"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Teresa Dib Zambon Atvars", "Solvent and molecular weight effects on fluorescence emission of MEH-PPV\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Suzana Pereira Nunes", "Inorganic modification of proton conductive polymer membranes for direct methanol fuel cells"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Suzana Pereira Nunes", "Ultrafiltration membranes from PVDF/PMMA blends"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Denise Freitas Siqueira Petri", "An Improved Method for the Assembly of Amino-Terminated Monolayers on SiO2 and the Vapor Deposition of Gold Layers"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Denise Freitas Siqueira Petri", "Structures at the Surface of Dry Thin Films of Grafted Copolymers\n"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maysa Furlan", "Acetylated DNA-damaging clerodane diterpenes from Casearia sylvestris1"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maysa Furlan", "A chromene and prenylated benzoic acid from Piper aduncum"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Ana Paula Baptista de Carvalho", "Simultaneous aluminium oxide pillaring and copper(ii) Schiff base complexes encapsulation in a montmorillonite"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Ana Paula Baptista de Carvalho", "Activated carbons from cork waste by chemical activation with K2CO3: Application to adsorption of natural gas components"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Anita Jocelyne Marsaioli", "An Easy Route to (-)-10(R)-Isothiocyanoaromadendrane and (-)-10(S)-Isothiocyanoalloaromadendrane"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Anita Jocelyne Marsaioli", "13C NMR spectral analysis of some isoquinoline alkaloids"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Auxiliadora Coelho Kaplan", "Iridoids as systematic markers in dicotyledon"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Maria Auxiliadora Coelho Kaplan", "Variation in cyanogenesis in plants with season and insect pressure"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Quezia Bezerra Cass", "Enantiomeric determination of pantoprazole in human plasma by multidimensional high-performance liquid chromatography"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química", "Quezia Bezerra Cass", "Gossypol enantiomer ratios in cotton seeds"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química e Física", "Sandra Helena Pulcinelli", "Morphological characterization of aqueous tin oxyhydroxide gel"],
      "size_columns": []
    }, {
      "filter": "ciências exatas e da terra",
      "nest_columns": ["Química e Física", "Sandra Helena Pulcinelli", "Evolution of the viscoelastic properties of SnO2 colloidal suspensions during the sol–gel transition"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Tania Casado", "How Can We Better Understand Current and Future Workforce Values in the Global Business Environment?"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Tania Casado", "Adaptação à transição de carreira na meia-idade"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Angela Maria Cavalcanti da Rocha", "The diffusion of exporting in Brazilian industrial clusters"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Angela Maria Cavalcanti da Rocha", "The international commitment of late‐internationalizing Brazilian entrepreneurial firms"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Marlei Pozzebon", "Challenges in Conducting Empirical Work Using Structuration Theory: Learning from IT Research"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Marlei Pozzebon", "The Influence of a Structurationist View on Strategic Management Research*"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Maria Aparecida Gouvêa", "LA RELACIÓN ENTRE LA CALIDAD DE LOS SERVICIOS DE LAS AGENCIAS DE TURISMO Y LA MIGRACIÓN HACIA LA COMPRA POR INTERNET"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Maria Aparecida Gouvêa", "Differentiation of municipalities in São Paulo state based on constitutional transferences and income tributary taxes"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Suzana Braga Rodrigues", "The Political Dynamics of Organizational Culture in an Institutionalized Environment"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Suzana Braga Rodrigues", "Co‐evolution in an Institutionalized Environment*\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Thaise Nara Graziottin Costa", "A MEDIAÇÃO DE CONFLITOS E O NOVO AMBIENTE DA JURISDIÇÃO: A ECO-JURISDIÇÃO COMPARTILHADA"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Thaise Nara Graziottin Costa", "PROJETO DE EXTENSÃO PARA COMUNIDADES PLURAIS: Um ensaio para a concretização do direito à cidadania"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Cláudia Souza Passador", "A presença de agentes intermediadores na formação de redes interorganizacionais: uma análise sob a perspectiva temporal"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Administração", "Cláudia Souza Passador", "Students' performance in the public education in the state of São Paulo, Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Mariângela Spotti Lopes Fujita", "Um modelo de leitura documentária para a indexação de artigos científicos: princípios de elaboração e uso para a formação de indexadores"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Mariângela Spotti Lopes Fujita", "Observing documentary reading by verbal protocol"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Leilah Santiago Bufrem", "Complementaridade qualitativo-quantitativa na pesquisa em informação"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Leilah Santiago Bufrem", "Faces da produção periódica na Ciência da Informação: o processo de legitimação científica e seus componentes"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Marta Lígia Pomim Valentim", "Inteligência competitiva em organizações: dado, informação e conhecimento"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Marta Lígia Pomim Valentim", "GESTÃO DA INFORMAÇÃO E GESTÃO DO CONHECIMENTO EM AMBIENTES ORGANIZACIONAIS: CONCEITOS E COMPREENSÕES"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Sueli Mara Soares Pinto Ferreira", "Usability of digital libraries: a study based on the areas of information science and human-computer-interaction"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Sueli Mara Soares Pinto Ferreira", "Design de biblioteca virtual centrado no usuário:\n\na abordagem do Sense-Making para estudos de necessidades e procedimentos de busca e uso da informação"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Beatriz Valadares Cendón", "The development and exercise of power by leaders of support units in implementing information technology-based services"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Beatriz Valadares Cendón", "Bases de dados de informação para negócios no Brasil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Silvana Aparecida Borsetti Gregorio Vidotti", "Arquitetura da informação e eye tracking: o que o olhar e os dados revelam"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Silvana Aparecida Borsetti Gregorio Vidotti", "Perspectivismo e tecnologias de informação e comunicação: acréscimos à ciência da informação?"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Plácida Leopoldina Ventura Amorim da Costa Santos", "Dado e Granularidade na perspectiva da Informação e Tecnologia: uma interpretação pela Ciência da Informação"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Plácida Leopoldina Ventura Amorim da Costa Santos", "Mapping the knowledge covered by library classification systems\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Renata Maria Abrantes Baracho Porto", "Sistema de recuperação de informação visual em desenhos técnicos de engenharia e arquitetura: modelo conceitual, esquema de classificação e protótipo"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Renata Maria Abrantes Baracho Porto", "Information Retrieval for Engineering Projects: Using Images to Search for Images"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Celia Ribeiro Zaher", "Electronic Consortium of Libraries: A Bibliographical Cooperation Scheme"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Celia Ribeiro Zaher", "IBICT: perfil de seus primórdios"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Maria Aparecida Moura", "A concepção e o uso das linguagens de indexação face às contribuições da semiótica e da semiologia"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Ciência da Informação", "Maria Aparecida Moura", "Construindo tesauros a partir de tesauros existentes: a experiência do TCI - Tesauro em Ciência da Informação\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Maria das Graças Targino", "Novas Tecnologias e Produção Científica: uma relação de causa e efeito ou uma relação de muitos efeitos?"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Maria das Graças Targino", "Avaliação dos cursos de pós-graduação: estímulo ou coerção?"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Cicilia Maria Krohling Peruzzo", "Televisión comunitaria en Brasil: Antecedentes y participación popular en la gestión y en la programación"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Cicilia Maria Krohling Peruzzo", "Mídia comunitária"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Maria Immacolata Vassallo de Lopes", "Telenovela brasileira: uma narrativa sobre a nação"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Maria Immacolata Vassallo de Lopes", "Televisões, nações e narrações: para uma revisão das identidades culturais em tempos de globalização\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Ana Valéria Machado Mendonça", "Alimentação e nutrição na Estratégia Saúde da Família em cinco municípios brasileiros"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Comunicação", "Ana Valéria Machado Mendonça", "Os discursos na Audiência Pública da Saúde e seu impacto nas decisões do Supremo Tribunal Federal: uma análise à luz da teoria dos sistemas sociais"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Rosana Aparecida Baeninger", "Mobilidade espacial da população no Mercosul: metrópoles e fronteiras"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Rosana Aparecida Baeninger", "São Paulo e suas migrações no final do século 20"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Marcia Caldas de Castro", "Malaria risk on the Amazon frontier"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Marcia Caldas de Castro", "Is malaria illness among young children a cause or a consequence of low socioeconomic status? evidence from the united Republic of Tanzania"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Elza Salvatori Berquó", "Notes on the female condom: experiences in Brazil."],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Demografia", "Elza Salvatori Berquó", "Reprodução na juventude: perfis sociodemográficos, comportamentais e reprodutivos na PNDS 2006"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Carla Aparecida Arena Ventura", "Políticas e leis sobre drogas ilícitas no Brasil e a perspectiva de familiares e pessoas próximas a usuários de drogas: estudo na Cidade de Ribeirão Preto, São Paulo, Brasil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Carla Aparecida Arena Ventura", "Health and human development: nursing and the human right to health in Brazil."],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Viviane Coelho de Sellos-Knoerr", "RESPONSABILIDADE SOCIAL DA EMPRESA E SUBCIDADANIA PAUTAS PARA UMA REFLEXÃO DE ÍNDOLE CONSTITUCIONAL."],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Viviane Coelho de Sellos-Knoerr", "A RESPONSABILIDADE CIVIL NO CASO DE ABUSO DE PODER FISCAL"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Marcia Carla Pereira Ribeiro", "Mecanismos societários e contratuais de gestão das sociedades estatais"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Marcia Carla Pereira Ribeiro", "Gestao de contratos Empresariais Intervencao e Desenvolvimento Economico e Socioambiental"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria de Fátima Ribeiro", "ANÁLISE DO MERCADO DE CARBONO SOB A ÓTICA TRIBUTÁRIA"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria de Fátima Ribeiro", "O TRIBUTO COMO FATOR DE GERAÇÃO DA JUSTIÇA FISCAL E DO BEM-ESTAR SOCIAL"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Gabrielle Bezerra Sales", "AS NOVAS TECNOLOGIAS DE INFORMAÇÃO E DE COMUNICAÇÃO (TIC) E O DIREITO À DESCONEXÃO COMO DIREITO HUMANO E FUNDAMENTAL NO ORDENAMENTO JURÍDICO BRASILEIRO"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Gabrielle Bezerra Sales", "igualdade Como Proibição de Discriminação e Direito à (e Dever de) Inclusão: o Acesso ao Ensino Superior e a Regulamentação do Estatuto Brasileiro das Pessoas com Deficiênci"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Vania Siciliano Aieta", "A necessária distinção entre demos e kratos : poder do povo ou poder sobre o povo? : quem é o povo? : a titularidade do poder constituinte originário"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Vania Siciliano Aieta", "O ASSEGURAMENTO DA SOBERANIA NO PLANO INTERNO PELO RESPEITO AO CUMPRIMENTO DAS REGRAS DO JOGO: O PEDIDO DE IMPEACHMENT DA PRESIDENTE DO BRASIL E A FALTA DE AMPARO JURÍDICO DO PEDIDO"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria Cláudia da Silva Antunes de Souza", "THE (IN)APPLICABILITY OF THE STATUE OF REFUGEES TO ENVIRONMENTALLY DISPLACED PERSONS"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria Cláudia da Silva Antunes de Souza", "CIDADES SUSTENTÁVEIS: LIMITES E POSSIBILIDADES CONCEITUAIS E REGULATÓRIOS"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Giselda Maria Fernandes Novaes Hironaka", "Contrato: estrutura milenar de fundação do direito privado"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Giselda Maria Fernandes Novaes Hironaka", "Famílias paralelas"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Sandra Regina Martini", "A terra como bem-comum na memória do Direito brasileiro"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Sandra Regina Martini", "O SISTEMA SOCIAL DA SAÚDE: CONCEITO, LIMITES E POSSIBILIDADES"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Salete Oro Boff", "Aproximações entre ética animal e ética da vida"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Salete Oro Boff", "Análise dos benefícios sociais da bitcoin como moeda"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Betina Treiger Grupenmacher", "A tributação extrafiscal de indução através dos incentivos fiscais – Análise do incentivo fiscal incidente sobre a contribuição do Seguro de Acidentes do Trabalho"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Betina Treiger Grupenmacher", "Regra-matriz do ICMS-mercadoria e a exploração econômica do software"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Mara Vidigal Darcanchy", "TELETRABALHO COMO VANTAGEM COMPETITIVA PARA O COLABORADOR DEFICIENTE"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Mara Vidigal Darcanchy", "RESPONSABILIDADE SOCIAL DA EMPRESA\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Rosângela Angelin", "Direitos humanos e violência doméstica contra as mulheres: oito anos de encontros e desencontros no Brasil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Rosângela Angelin", "Os movimentos feministas e de mulheres e o combate aos conflitos de gênero no Brasil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Larissa Liz Odreski Ramina", "Tratamento jurídico internacional da corrupção: a Convenção Interamericana contra a Corrupção da O.E.A. e a Convenção sobre o combate da corrupção de funcionários públicos estrangeiros em transações comerciais internacionais da O.C.D.E"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Larissa Liz Odreski Ramina", "A doutrina Busch e a resolução 1441 do conselho de segurança na ótica do direito internacional"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria Elizabeth Guimarães Teixeira Rocha", "A reelegibilidade dos vices e a desincompatibilização à luz da emenda constitucional n. 16/97"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Direito", "Maria Elizabeth Guimarães Teixeira Rocha", "A MULHER MILITAR E SUA INTEGRAÇÃO NAS FORÇAS ARMADAS"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Economia", "Maria Sylvia Macchione Saes", "Análise de concorrência no mercado mundial de café verde"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Economia", "Maria Sylvia Macchione Saes", "Differentiation strategies in the Brazilian market cafe\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Economia Doméstica", "Maria das Dores Saraiva de Loreto", "Production in Brazil: The Case of PROVARZEAS-KFW Program in Espirito Santo State"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Economia Doméstica", "Maria das Dores Saraiva de Loreto", "De pentecostes ao pentecostalismo: reflexões possíveis para a construção de sentido da experiência brasileira"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Ines Souza Bravo", "A saúde no Brasil e em Portugal na atualidade: o desafio de concretizar direitos"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Ines Souza Bravo", "Conselhos de Saúde e Serviço Social:\n\nluta política e trabalho profissional"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria do Perpétuo Socorro Rodrigues Chaves", "Pueblos Ribereños de la Amazonía: haberes y habilidades"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria do Perpétuo Socorro Rodrigues Chaves", "Ciência, tecnologia e inovação para o\n\ndesenvolvimento da Amazônia: experiência da\nUniversidade Federal do Amazonas"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Beatriz Costa Abramides", "80 anos de Serviço Social no Brasil: organização política e direção social da profissão no processo de ruptura com o conservadorismo."],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Beatriz Costa Abramides", "Regime de acumulação flexível e saúde do trabalhador"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Silvana Maria Escorsim", "Violência de gênero e saúde coletiva: um debate necessário"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Silvana Maria Escorsim", "Desafios no atendimento a mulheres com risco e/ou tentativa de suicídio em uma maternidade de alto risco"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Aldaiza Sposati", "Controle social e políticas de saúde\"Controle Social e Políticas de Saúde"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Aldaiza Sposati", "Território e gestão de políticas sociais\n\n"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Liduína de Oliveira e Silva", "Violência e controle sócio-penal contra adolescentes com práticas infracionais"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Maria Liduína de Oliveira e Silva", "\nManifesto de Fundação do Curso de Serviço Social da Universidade Federal de São Paulo (Unifesp), do campus Baixada Santista"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Patrícia Krieger Grossi", "Desvendando o fenômeno bullying nas escolas públicas de Porto Alegre, RS, Brazil"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Patrícia Krieger Grossi", "Occlusal Risk Factors for Temporomandibular Disorders"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Eliana Mendes de Souza Teixeira Roque", "Intrafamily violence and justice"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Eliana Mendes de Souza Teixeira Roque", "DESVENDANDO A VIOLÊNCIA DOMÉSTICA CONTRA CRIANÇAS E ADOLESCENTES SOB A ÓTICA DOS OPERADORES DO DIREITO NA COMARCA DE JARDINÓPOLIS-SP"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Silene de Moraes Freire", "O Serviço Social crítico no atual contexto de redemocratização da América Latina"],
      "size_columns": []
    }, {
      "filter": "ciências sociais aplicadas",
      "nest_columns": ["Serviço Social", "Silene de Moraes Freire", "Movimento estudantil no Brasil: lutas passadas e desafios presentes"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Aeroespecial", "Mirabel Cerqueira Rezende", "Mechanical behavior of carbon fiber reinforced polyamide composites"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Aeroespecial", "Mirabel Cerqueira Rezende", "The influence of porosity on the interlaminar shear strength of carbon/epoxy and carbon/bismaleimide fabric laminates"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Biomédica", "Martha Simões Ribeiro", "Effects of Low-Intensity Polarized Visible Laser Radiation on Skin Burns: A Light Microscopy Study"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Biomédica", "Martha Simões Ribeiro", "Effects of 1047-nm Neodymium Laser Radiation on Skin Wound Healing"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Civil", "Sofia Maria Carrato Diniz", "Reliability Bases for High-Strength Concrete Columns"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Civil", "Sofia Maria Carrato Diniz", "Strength and Ductility Simulation of High-Strength Concrete Columns"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Bluma Guenther Soares", "Graft Copolymer from Modified Ethylene−Vinyl Acetate (EVA) Copolymers. 3. Poly(EVA-g-Methyl Methacrylate) from Mercapto-Modified EVA"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Bluma Guenther Soares", "Synthesis and properties of epoxy resin modified with epoxy-terminated liquid polybutadiene"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Maria Ines Bruno Tavares", "Study of nylon 6 and poly(propylene oxide) blends by thermal measurements and carbon‐13 NMR high resolution solid‐state"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Maria Ines Bruno Tavares", "13C-Detected 1H Spin Diffusion and 1H Relaxation Study of Multicomponent Polymer Blends"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Fernanda Margarida Barbosa Coutinho", "Polypropylene–wood fiber composites: Effect of treatment and mixing conditions on mechanical properties"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Iêda Maria Garcia dos Santos", "Rheological properties of tin oxide suspensions"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Iêda Maria Garcia dos Santos", "Influence of pH on iron doped Zn\u003cSubscript>2\u003c/Subscript>TiO\u003cSubscript>4\u003c/Subscript> pigments"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Dulce Maria de Araújo Melo", "Room temperature photoluminescence of amorphous BaxSr1−xTiO3 doped with chromium"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Luciana Reyes Pires Kassab", "Photoluminescence enhancement by gold nanoparticles in Eu3+Eu3+ doped GeO2–Bi2O3GeO2–Bi2O3 glasses"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Luciana Reyes Pires Kassab", "Electron beam induced second-harmonic generation in Er3+ doped PbO–GeO2 glasses containing silver nanoparticles"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Andrea Simone Stucchi de Camargo Alvarez Bernardez", "Structural and spectroscopic properties of rare-earth (Nd3+,(Nd3+, Er3+,Er3+, and Yb3+)Yb3+) doped transparent lead lanthanum zirconate titanate ceramics"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Andrea Simone Stucchi de Camargo Alvarez Bernardez", "Excited-state absorption and 1064-nm end-pumped laser emission of Nd:YVO4 single-crystal fiber grown by laser-heated pedestal growth"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Judith Pessoa de Andrade Feitosa", "Graft copolymerisation of acrylamide onto cashew gum"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Eliana Navarro dos Santos Muccillo", "Impedance spectroscopy of Mg-partially stabilized zirconia and cubic phase decomposition"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Eliana Navarro dos Santos Muccillo", "Synthesis and characterization of submicron zirconia–12 mol% ceria ceramics"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Vanessa de Freitas Cunha Lins", "Electrochemical impedance spectroscopy and linear polarization applied to evaluation of porosity of phosphate conversion coatings on electrogalvanized steels"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Vanessa de Freitas Cunha Lins", "Infrared and ultraviolet–visible spectroscopy study of the degradation of polyester and polyester/ethylene methyl acrylate copolymer blend coatings on steel"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Elisabete Frollini", "An efficient, one‐pot acylation of cellulose under homogeneous reaction conditions"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Elisabete Frollini", "Phenolic Thermoset Matrix Reinforced with Sugar Cane Bagasse Fibers: Attempt to Develop a New Fiber Surface Chemical Modification Involving Formation of Quinones Followed by Reaction with Furfuryl Alcohol"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Maria Ines Basso Bernardi", "Synthesis and characterization of spinel pigment CaFe2O4 obtained by the polymeric precursor method"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Maria Ines Basso Bernardi", "Evaluation of CoAl2O4 as ceramic pigments"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Virginia Sampaio Teixeira Ciminelli", "Assessment of interference in biosorption of a heavy metal"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Virginia Sampaio Teixeira Ciminelli", "Simultaneous production of impurity-free water and magnetite from steel pickling liquors by microwave-hydrothermal processing"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Fernanda Roberta Marciano", "Antibacterial activity of DLC films containing TiO2 nanoparticles"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Fernanda Roberta Marciano", "The improvement of DLC film lifetime using silver nanoparticles for use on space devices"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Ana Paula da Luz", "Thermodynamic evaluation of spinel containing refractory castables corrosion by secondary metallurgy slag"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Materiais e Metalúrgica", "Ana Paula da Luz", "Use of glass waste as a raw material in porcelain stoneware tile mixtures"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Produção", "Irenilza de Alencar Naas", "Impact of global warming on beef cattle production cost in Brazil"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia de Produção", "Irenilza de Alencar Naas", "Broiler surface temperature distribution of 42 day old chickens"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Linda Viola Ehlin Caldas", "Coloured glasses for high dose dosimetry using the thermoluminescent technique."],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Linda Viola Ehlin Caldas", "COMMERCIAL GLASS FOR HIGH DOSES USING DIFFERENT DOSIMETRIC TECHNIQUES"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Helen Jamil Khoury", "Comparison between effective doses for voxel-based and stylized exposure models from photon and electron irradiation."],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Helen Jamil Khoury", "Effect of high gamma doses on the sensitization of natural quartz used for thermoluminescence dosimetry"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Neyde Yukie Murakami Iha", "Energy conversion: from the ligand field photochemistry to solar cells"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Nuclear", "Neyde Yukie Murakami Iha", "Light driven trans-to-cis isomerization of stilbene-like ligands in fac-[Re(CO)3(NN)(trans-L)]+ and luminescence of their photoproducts"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Regina Wolf Maciel", "Free fatty acid separation from vegetable oil deodorizer distillate using molecular distillation process"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Regina Wolf Maciel", "Interactive supervision of batch distillation with advanced control capabilities"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Fernanda Margarida Barbosa Coutinho", "Synthesis and characterization of styrene–divinylbenzene loaded with di(2‐ethylhexyl)phosphonic acid. I. Influence of diluent mixture on the porous structure of the copolymer"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Dulce Maria de Araújo Melo", "Evaluation of CoAl2O4 as ceramic pigments"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Aparecida Zaghete Bertochi", "Effect of Nb on barium titanate prepared from citrate solutions"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Aparecida Zaghete Bertochi", "Phase Characterization of Lead Zirconate Titanate Obtained from Organic Solutions of Citrates"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Selene Maria de Arruda Guelli Ulson de Souza", "Toxicity of textile dyes and their degradation by the enzyme horseradish peroxidase (HRP)"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Selene Maria de Arruda Guelli Ulson de Souza", "Removal of COD and color from hydrolyzed textile azo dye by combined ozonation and biological treatment"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Raquel Santos Mauler", "Dynamic‐Mechanical Properties of Ethylene/α‐Olefin Copolymers Prepared by a Metallocene Catalyst"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Raquel Santos Mauler", "Effect of the alkylaluminum cocatalyst on ethylene polymerization by a nickel–diimine complex"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Marisa Masumi Beppu", "Adsorption of Cu(II) on porous chitosan membranes functionalized with histidine"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Marisa Masumi Beppu", "Aluminum Phosphate Particles Containing Closed Pores: Preparation, Characterization, and Use as a White Pigment"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Ruth Herta Goldschmidt Aliaga Kiminami", "Combustion Synthesis of Nanopowder Ceramic Powders"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Ruth Herta Goldschmidt Aliaga Kiminami", "Microwave synthesis of alumina powders"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Gisella Maria Zanin", "Modeling Fixed and Fluidized Reactors for Cassava Starch Saccharification with Immobilized Enzyme"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Gisella Maria Zanin", "Performance of fixed and fluidized bed reactors with immobilized enzyme"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Raquel de Lima Camargo Giordano", "Analysis of a Taylor–Poiseuille vortex flow reactor — II: reactor modeling and performance assessment using glucose-fructose isomerization as test reaction"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Raquel de Lima Camargo Giordano", "Performance of a continuous Taylor–Couette–Poiseuille vortex flow enzymic reactor with suspended particles"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Judith Pessoa de Andrade Feitosa", "Chemical and X‐ray analyses of five brands of dental gutta‐percha cone"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria do Carmo Rangel Santos Varela", "Catalytic evaluation of perovskite-type oxide LaNi1−xRuxO3 in methane dry reforming"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria do Carmo Rangel Santos Varela", "Ethylbenzene dehydrogenation in the presence of carbon dioxide over magnesia-supported iron oxides"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Regina de Fátima Peralta Muniz Moreira", "Modification of pore size in activated carbon by polymer deposition and its effects on molecular sieve selectivity"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Regina de Fátima Peralta Muniz Moreira", "Simultaneous photocatalytic Cr(VI) reduction and dye oxidation in a TiO2 slurry reactor"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Diana Cristina Silva de Azevedo", "Design of a simulated moving bed in the presence of mass‐transfer resistances"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Diana Cristina Silva de Azevedo", "SMB CHROMATOGRAPHY APPLIED TO THE SEPARATION/PURIFICATION OF FRUCTOSE FROM CASHEW APPLE JUICE"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Claudia Sayer", "Dynamic optimization of semicontinuous emulsion copolymerization reactions: Composition and molecular weight distribution"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Marcia Walquiria de Carvalho Dezotti", "Silica immobilized enzyme catalyzed removal of chlorolignins from eucalyptus kraft effluent"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Debora Terezia Balogh", "Synthesis and characterization of a dye-functionalized polythiophene with different chromic properties"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Debora Terezia Balogh", "Solvent Effects on Organosolv Lignin from Pinus caribaea hondurensis"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Luciana Rocha Barros Gonçalves", "A kinetic study of synthesis of amoxicillin using penicillin G acylase immobilized on agarose"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Luciana Rocha Barros Gonçalves", "The role of 6-aminopenicillanic acid on the kinetics of amoxicillin enzymatic synthesis catalyzed by penicillin G acylase immobilized onto glyoxyl-agarose"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Cleide Mara Faria Soares", "Influence of the alkyl-substituted silane precursor on sol–gel encapsulated lipase activity"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Cleide Mara Faria Soares", "Covalent coupling method for lipase immobilization on controlled pore silica in the presence of nonenzymatic proteins."],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Cheila Gonçalves Mothé", "Thermal behavior of the heart of SHR and wistar rats"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Cheila Gonçalves Mothé", "Rheological behavior of aqueous dispersions of cashew gum and gum arabic: effect of concentration and blending"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Leda dos Reis Castilho", "Cell Retention Devices for Suspended-Cell Perfusion Cultures"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Leda dos Reis Castilho", "An Integrated Process for Mammalian Cell Perfusion Cultivation and Product Purification Using a Dynamic Filter"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Mariana de Mattos Vieira Mello Souza", "Autothermal reforming of methane over Pt/ZrO2/Al2O3 catalysts"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Mariana de Mattos Vieira Mello Souza", "Reforming of Methane with Carbon Dioxide over Pt/ZrO2/Al2O3 Catalysts"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Ligia Damasceno Ferreira Marczak", "Water adsorption isotherms of texturized soy protein"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Ligia Damasceno Ferreira Marczak", "Degradation kinetics of anthocyanins in acerola pulp: Comparison between ohmic and conventional heat treatment"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Helena Andrade Santana", "Polymorphism, crystallinity and hydrophilic–lipophilic balance of stearic acid and stearic acid–capric/caprylic triglyceride matrices for production of stable nanoparticles"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Maria Helena Andrade Santana", "Protection against tuberculosis by a single intranasal administration of DNA-hsp65 vaccine complexed with cationic liposomes"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Telma Teixeira Franco", "Use of chemically modified proteins to study the effect of a single protein property on partitioning in aqueous two-phase systems: Effect of surface hydrophobicity."],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Química", "Telma Teixeira Franco", "Extraction in aqueous two-phase systems of alkaline xylanase produced by Bacillus pumilus and its application in kraft pulp bleaching"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Éngenharia Química", "Claudia Sayer", "Simulation of emulsion copolymerization reactions in a continuous pulsed sieve-plate column reactor"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Rosangela Bergamasco", "Utilization of the Coagulation Diagram in the Evaluation of the Natural Organic Matter (NOM) Removal for Obtaining Potable Water"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Rosangela Bergamasco", "An application of chitosan as a coagulant/flocculant in a microfiltration process of natural water"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Andrea Moura Bernardes", "Collection and recycling of portable batteries: a worldwide overview compared to the Brazilian situation"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Andrea Moura Bernardes", "Recycling of batteries: a review of current processes and technologies"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Maria Bernadete Amâncio Varesche", "Microbial colonization of polyurethane foam matrices in horizontal-flow anaerobic immobilized-sludge reactor"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Maria Bernadete Amâncio Varesche", "Sulphate removal from industrial wastewater using a packed-bed anaerobic reactor"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Marcia Walquiria de Carvalho Dezotti", "Treatment and detoxification of a sanitary landfill leachate"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Sergiane Caldas Barbosa", "Pesticide residue determination in groundwater using solid-phase extraction and high-performance liquid chromatography with diode array detector and liquid chromatography-tandem mass spectrometry"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharia Sanitária", "Sergiane Caldas Barbosa", "Validation of method for determination of different classes of pesticides in aqueous samples by dispersive liquid–liquid microextraction with liquid chromatography–tandem mass spectrometric detection"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharias de Materiais e Metalúrgica", "Ducinei Garcia", "Dielectric Properties of Ba 1−x Sr x TiO 3 Single Crystal Fibers Grown by Laser Heated Pedestal Growth Technique"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharias de Materiais e Metalúrgica", "Ducinei Garcia", "Growth and properties of Ba0.9Sr0.1TiO3 single crystal fibers"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharias de Materiais e Metalúrgica", "Alexandra Ancelmo Piscitelli Mansur", "Interface Porcelain Tile/PVA Modified Mortar: A Novel Nanostructure Approach"],
      "size_columns": []
    }, {
      "filter": "engenharias",
      "nest_columns": ["Engenharias de Materiais e Metalúrgica", "Alexandra Ancelmo Piscitelli Mansur", "“Green” colloidal ZnS quantum dots/chitosan nano-photocatalysts for advanced oxidation processes: Study of the photodegradation of organic dye pollutants"],
      "size_columns": []
    }]
  };
for (var _Flourish_dataset in _Flourish_data) {
  window.template.data[_Flourish_dataset] = _Flourish_data[_Flourish_dataset];
  window.template.data[_Flourish_dataset].column_names = _Flourish_data_column_names[_Flourish_dataset];
}
window.template.draw();
