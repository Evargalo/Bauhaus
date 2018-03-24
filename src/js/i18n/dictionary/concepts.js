const dictionary = {
	conceptsTitle: {
		fr: 'Concepts',
		en: 'Concepts',
	},
	conceptSearchTitle: {
		fr: 'Concepts - Recherche',
		en: 'Concepts - Search',
	},
	conceptAdvancedSearchTitle: {
		fr: 'Recherche avancée',
		en: 'Advanced search',
	},
	conceptsNumberTitle: {
		fr: 'Nombre de concepts',
		en: 'Number of concepts',
	},
	collectionsNumberTitle: {
		fr: 'Nombre de collections',
		en: 'Number of collections',
	},
	topConceptsNumberTitle: {
		fr: 'dont « top concepts »',
		en: 'whose « top concepts »',
	},
	provisionalConceptsNumberTitle: {
		fr: 'dont « provisoires »',
		en: 'whose « provisionals »',
	},
	validDateConceptsNumberTitle: {
		fr: 'dont « ayant une date de fin de validité »',
		en: 'whose « had an expiration date »',
	},
	collectionsTitle: {
		fr: 'Collections',
		en: 'Collections',
	},
	collectionSearchTitle: {
		fr: 'Collections - Recherche',
		en: 'Collections - Search',
	},
	conceptVersionTitle: {
		fr: 'Version du concept',
		en: 'Concept version',
	},
	sendConceptTitle: {
		fr: label => `Envoyer le concept " ${label} "`,
		en: label => `Send concept " ${label} "`,
	},
	sendCollectionTitle: {
		fr: label => `Envoyer la collection " ${label} "`,
		en: label => `Send collection " ${label} "`,
	},
	conceptsExportPanelTitle: {
		fr: 'Concepts à exporter',
		en: 'Concepts to export',
	},
	hasNotConceptToExport: {
		fr: 'Ajouter au moins un concept à exporter',
		en: 'Add a concept at least to export',
	},
	collectionsExportPanelTitle: {
		fr: 'Collections à exporter',
		en: 'Collections to export',
	},
	hasNotCollectionToExport: {
		fr: 'Ajouter au moins une collection à exporter',
		en: 'Add a collection at least to export',
	},
	conceptsToValidTitle: {
		fr: 'Validation des concepts provisoires',
		en: 'Provisional concepts to valid',
	},
	conceptsToValidPanelTitle: {
		fr: 'Concepts à valider',
		en: 'Concepts to valid',
	},
	hasNotConceptToValid: {
		fr: 'Ajouter au moins un concept à valider',
		en: 'Add a concept at least to valid',
	},
	collectionMembersPanelTitle: {
		fr: 'Concepts membres de la collection',
		en: 'Collection concepts members',
	},
	conceptStandBy: {
		fr: 'Le concept est en cours de la validation par',
		en: 'Concept is being validated by',
	},
	collectionsToValidTitle: {
		fr: 'Validation des collections provisoires',
		en: 'Provisional collections to valid',
	},
	collectionsToValidPanelTitle: {
		fr: 'Collections à valider',
		en: 'Collections to valid',
	},
	hasNotCollectionToValid: {
		fr: 'Ajouter au moins une collection à valider',
		en: 'Add a collection at least to valid',
	},
	collectionStandBy: {
		fr: 'La collection est en cours de la validation par',
		en: 'Collection is being validated by',
	},
	isConceptValidTitle: {
		fr: 'Etat du concept',
		en: 'State of the concept',
	},
	isCollectionValidTitle: {
		fr: 'Etat de la collection',
		en: 'State of the collection',
	},
	conceptsDefinition: {
		fr: 'Définition',
		en: 'Definition',
	},
	conceptsScopeNote: {
		fr: 'Définition courte',
		en: 'Short definition',
	},
	conceptsEditorialNote: {
		fr: 'Note éditoriale',
		en: 'Editorial note',
	},
	conceptsChangeNote: {
		fr: 'Note de changement',
		en: 'Change note',
	},
	incompleteConcept: {
		fr: 'Remplissez les champs requis pour pouvoir sauvegarder ce concept',
		en: 'Complete required fields to save this concept',
	},
	incompleteCollection: {
		fr:
			'Remplissez les champs requis pour pouvoir sauvegarder cette collection',
		en: 'Complete required fields to save this collection',
	},
	emptyDefinitionLg1: {
		fr: 'Le concept doit nécessairement comporter une définition',
		en: 'Concept necessary has a definition',
	},
	emptyScopeNoteLg1: {
		fr:
			'Le statut de diffusion étant public, la définition courte française doit être renseignée',
		en:
			'As dissemination status is public, short definition has to be completed',
	},
	hasScopeNoteLg2NotLg1: {
		fr:
			'La définition courte ne peut être renseignée que dans la seconde langue',
		en: "Short definition can't be only completed in second lang",
	},
	hasEditorialNoteLg2NotLg1: {
		fr: 'La note éditoriale ne peut être renseignée que dans la seconde langue',
		en: "Editorial note can't be only completed in second lang",
	},
	hasChangeNoteLg2NotLg1: {
		fr:
			'La note de changement ne peut être renseignée que dans la seconde langue',
		en: "Change note can't be only completed in second lang",
	},
	tooLongScopeNote: {
		fr: max => `La définition courte est limitée à ${max} caractères`,
		en: max => `Short definition is limited to ${max} characters`,
	},
	scopeNoteChar: {
		fr: 'caractères maximum',
		en: 'characters maximum',
	},
	createConceptTitle: {
		fr: 'Créer un nouveau concept',
		en: 'Create concept',
	},
	updateConceptTitle: {
		fr: 'Modifier le concept',
		en: 'Update concept',
	},
	createCollectionTitle: {
		fr: 'Créer une nouvelle collection',
		en: 'Create collection',
	},
	updateCollectionTitle: {
		fr: 'Modifier la collection',
		en: 'Update collection',
	},
	conceptStatusValid: {
		fr: 'Validé',
		en: 'Valid',
	},
	conceptStatusProvisional: {
		fr: 'Provisoire',
		en: 'Provisional',
	},
	collectionStatusValid: {
		fr: 'Validée',
		en: 'Valid',
	},
	collectionStatusProvisional: {
		fr: 'Provisoire',
		en: 'Provisional',
	},
	conceptsCreationDateMessage: {
		fr: 'Concept créé entre le',
		en: 'Concept created between',
	},
	conceptsUpdateDateMessage: {
		fr: 'Concept modifié entre le',
		en: 'Concept modified between',
	},
	conceptsTransitionDateMessage: {
		fr: 'et le',
		en: 'and',
	},
	conceptVersioningTitle: {
		fr: 'Veuillez sélectionner le type de version',
		en: 'Please select versioning type',
	},
	conceptVersioningBody: {
		fr: label => `<p>Les notes du concept « <b>${label}</b> » ont été modifiées.</p>
            <p>Voulez-vous créer une nouvelle version, ou écraser les données précédentes ?</p>`,
		en: label => `<p>Concept « <b>${label}</b> » notes have been updated.</p>
            <p>Would you like to create new version, or update previous one ?</p>`,
	},
	conceptVersioningFooter: {
		fr: `<p>Pour créer une nouvelle version, la note de changement doit être documentée :</p>
          <ul><li><p>La note ne peut être vide</p></li>
          <li><p>La note doit être différente de celle de la version précédente</p></li></ul>`,
		en: `<p>To create new version, change note has to be documented :</p>
          <ul><li><p>Note can't be empty</p></li>
          <li><p>Note has to be differente from the previous one</p></li></ul>`,
	},
	conceptMailObjectDefault: {
		fr: label => `RMéS - Envoi du descriptif du concept « ${label} »`,
		en: label => `RMéS - Sending the concept « ${label} » description`,
	},
	conceptMailDefault: {
		fr: params => {
			let prefLabelLg1 = params[1],
				id = params[2],
				validText = '',
				href = params[0] + 'concept/' + id,
				inseeText = ` (<a href=${href}>Lien vers le concept</a>)`;
			if (params.includes('Provisoire'))
				validText = `<p><b>Ce concept est en attente de validation.</b></p>`;
			return `<p>Bonjour,</p>
          <p>Vous trouverez ci-joint la description du concept « <b>
          ${prefLabelLg1}
          </b> »${inseeText} extraite de la base RMéS-Concepts.</p>
          ${validText}
          <p>Pour toute demande concernant ce concept merci de répondre via la boîte fonctionnelle :DG75 RMéS-Concepts et définitions.</p>
          <p>L'équipe RMéS<br/>
          Insee - DG<br/>
          DMCSI - Unité Qualité</p>`;
		},
		en: params => {
			let prefLabelLg1 = params[1],
				id = params[2],
				validText = '',
				href = params[0] + 'concept/' + id,
				inseeText = ` (<a href=${href}>Concept link</a>)`;
			if (params.includes('Provisoire'))
				validText = `<p><b>This concept is waiting for validation.</b></p>`;
			return `<p>Hi,</p>
          <p>You will find attached the description of the concept « <b>
          ${prefLabelLg1}
          </b> »${inseeText} extract from RMéS-Concepts repository.</p>
          ${validText}
          <p>For any request concerning this concept please answer via the functional mail box :DG75 RMéS-Concepts et définitions.</p>
          <p>RMeS Team<br/>
          Insee - DG<br/>
          DMCSI - Quality Unit</p>`;
		},
	},
	sendConceptSuccess: {
		fr: label => `Le concept " ${label} " a bien été envoyé`,
		en: label => `Concept " ${label} " has been sent`,
	},
	sendConceptFailure: {
		fr: label => `Le concept " ${label} " n'a pas été envoyé`,
		en: label => `Concept " ${label} " was not sent`,
	},
	collectionMailObjectDefault: {
		fr: label => `RMéS - Envoi de la composition de la collection « ${label} »`,
		en: label => `RMéS - Sending the collection « ${label} » composition`,
	},
	collectionMailDefault: {
		fr: params => {
			let prefLabelLg1 = params[1],
				id = params[2],
				validText = '',
				href = params[0] + 'collection/' + id,
				inseeText = ` (<a href=${href}>Lien vers la collection</a>)`;
			if (params.includes('Provisoire'))
				validText = `<p><b>Cette collection est en attente de validation.</b></p>`;
			return `<p>Bonjour,</p>
	          <p>Vous trouverez ci-joint la composition de la collection de concepts « <b>
	          ${prefLabelLg1}
	          </b> »${inseeText} extraite de la base RMéS-Concepts.</p>
	          ${validText}
	          <p>Pour toute demande concernant cette collection merci de répondre via la boîte fonctionnelle :DG75 RMéS-Concepts et définitions.</p>
	          <p>L'équipe RMéS<br/>
	          Insee - DG<br/>
	          DMCSI - Unité Qualité</p>`;
		},
		en: params => {
			let prefLabelLg1 = params[1],
				id = params[2],
				validText = '',
				href = params[0] + 'collection/' + id,
				inseeText = ` (<a href=${href}>Collection link</a>)`;
			if (params.includes('Provisoire'))
				validText = `<p><b>This collection is waiting for validation.</b></p>`;
			return `<p>Hi,</p>
	          <p>You will find attached the composition of the collection « <b>
	          ${prefLabelLg1}
	          </b> »${inseeText} extract from RMéS-Concepts repository.</p>
	          ${validText}
	          <p>For any request concerning this collection please answer via the functional mail box :DG75 RMéS-Concepts et définitions.</p>
	          <p>RMeS Team<br/>
	          Insee - DG<br/>
	          DMCSI - Quality Unit</p>`;
		},
	},
	sendCollectionSuccess: {
		fr: label => `La collection " ${label} " a bien été envoyée`,
		en: label => `Collection " ${label} " has been sent`,
	},
	sendCollectionFailure: {
		fr: label => `La collection " ${label} " n'a pas été envoyée`,
		en: label => `Collection " ${label} " was not sent`,
	},
	dashboardConceptsTitle: {
		fr: 'Tableau de bord des concepts',
		en: 'Concepts dashboard',
	},
	dashboardConceptsSummaryTitle: {
		fr: 'Etat de la base des concepts au',
		en: 'State of the concepts repository at',
	},
	dashboardCollectionsSummaryTitle: {
		fr: 'Etat de la base des collections au',
		en: 'State of the collections repository at',
	},
	dashboardConceptsListPickerTitle: {
		fr: type => `Liste des ${type} de concepts depuis le :`,
		en: type => `Concepts ${type} list since :`,
	},
	dashboardCollectionsListPickerTitle: {
		fr: type => `Liste des ${type} de collections depuis le :`,
		en: type => `Collections ${type} list since :`,
	},
	dashboardConceptsByCreatorTitle: {
		fr: 'Nombre de concepts par propriétaire',
		en: 'Concepts by owner',
	},
	dashboardCollectionsByCreatorTitle: {
		fr: 'Nombre de collections par propriétaire',
		en: 'Collections by owner',
	},
};

export default dictionary;
