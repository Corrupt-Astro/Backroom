document.addEventListener('DOMContentLoaded', () => {
  const generateImageBtn = document.getElementById('generateImageBtn');
  const imageContainer = document.getElementById('imageContainer');
  const levelNumberInput = document.getElementById('levelNumber');
  const characteristicsInput = document.getElementById('characteristics');
  const phenomenaInput = document.getElementById('phenomena');
  const objectsInput = document.getElementById('objects');
  const entitiesInput = document.getElementById('entities');
  const entrancesInput = document.getElementById('entrances');
  const exitsInput = document.getElementById('exits');
  const generateTextBtn = document.getElementById('generateTextBtn');
  const coloniesInput = document.getElementById('colonies');
  const textDescriptionContainer = document.getElementById('textDescriptionContainer');
  const wordCountSelector = document.getElementById('wordCount');
  const levelClassSelector = document.getElementById('levelClass');
  const safetyRadios = document.querySelectorAll('input[name="safety"]');
  const securityRadios = document.querySelectorAll('input[name="security"]');
  const entityCountSelector = document.getElementById('entityCount');
  const levelStructuresInput = document.getElementById('structures'); 
  const levelImageStyleSelector = document.getElementById('levelImageStyle'); 
  const customClassNameInput = document.getElementById('customClassName');
  const customClassGroup = document.getElementById('customClassGroup');
  const customSafetyGroup = document.getElementById('customSafetyGroup');
  const customSafetyNameInput = document.getElementById('customSafetyName');
  const customSecurityGroup = document.getElementById('customSecurityGroup');
  const customSecurityNameInput = document.getElementById('customSecurityName');
  const customEntityCountGroup = document.getElementById('customEntityCountGroup');
  const customEntityCountInput = document.getElementById('customEntityCount');
  const writingStyleSelector = document.getElementById('writingStyle');
  const customWritingStyleGroup = document.getElementById('customWritingStyleGroup');
  const customWritingStyleNameInput = document.getElementById('customWritingStyleName');
  const customWritingStyleInstructionsInput = document.getElementById('customWritingStyleInstructions');
  // New: Optional sections
  const survivalGuideToggle = document.getElementById('survivalGuideToggle');
  const foundFootagesToggle = document.getElementById('foundFootagesToggle');
  const foundNotesToggle = document.getElementById('foundNotesToggle');
  const theoriesToggle = document.getElementById('theoriesToggle');
  const incidentReportsToggle = document.getElementById('incidentReportsToggle');
  const revisionsToggle = document.getElementById('revisionsToggle');
  const addendumToggle = document.getElementById('addendumToggle');
  const explorerReportsToggle = document.getElementById('explorerReportsToggle');
  const testLogsToggle = document.getElementById('testLogsToggle');
  const interviewsToggle = document.getElementById('interviewsToggle');
  const discoveryToggle = document.getElementById('discoveryToggle');
  const archivedDocsToggle = document.getElementById('archivedDocsToggle');
  const audioTranscriptsToggle = document.getElementById('audioTranscriptsToggle');
  const timelineToggle = document.getElementById('timelineToggle');
  const addendumGroup = document.getElementById('addendumGroup');
  const explorerReportsGroup = document.getElementById('explorerReportsGroup');
  const testLogsGroup = document.getElementById('testLogsGroup');
  const interviewsGroup = document.getElementById('interviewsGroup');
  const discoveryGroup = document.getElementById('discoveryGroup');
  const archivedDocsGroup = document.getElementById('archivedDocsGroup');
  const audioTranscriptsGroup = document.getElementById('audioTranscriptsGroup');
  const timelineGroup = document.getElementById('timelineGroup');
  const survivalGuideText = document.getElementById('survivalGuideText');
  const foundFootagesText = document.getElementById('foundFootagesText');
  const foundNotesText = document.getElementById('foundNotesText');
  const theoriesText = document.getElementById('theoriesText');
  const incidentReportsText = document.getElementById('incidentReportsText');
  const revisionsText = document.getElementById('revisionsText');
  const addendumText = document.getElementById('addendumText');
  const explorerReportsText = document.getElementById('explorerReportsText');
  const testLogsText = document.getElementById('testLogsText');
  const interviewsText = document.getElementById('interviewsText');
  const discoveryText = document.getElementById('discoveryText');
  const archivedDocsText = document.getElementById('archivedDocsText');
  const audioTranscriptsText = document.getElementById('audioTranscriptsText');
  const timelineText = document.getElementById('timelineText');

  const generateEntityTextBtn = document.getElementById('generateEntityTextBtn');
  const entityDescriptionContainer = document.getElementById('entityDescriptionContainer');
  const generateEntityImageBtn = document.getElementById('generateEntityImageBtn');
  const entityImageContainer = document.getElementById('entityImageContainer');
  const entityDescriptionInput = document.getElementById('entityDescription');
  const entityBehaviorsInput = document.getElementById('entityBehaviors');
  const entityBiologyInput = document.getElementById('entityBiology');
  const entityDiscoveryInput = document.getElementById('entityDiscovery');
  const entityAdditionalInput = document.getElementById('entityAdditional');
  const entityDosDontsInput = document.getElementById('entityDosDonts');
  const entityNameInput = document.getElementById('entityName'); 
  const entityImageStyleSelector = document.getElementById('entityImageStyle'); 
  const entityHabitatsSelect = document.getElementById('entityHabitatsSelect');
  const entityHabitatManualGroup = document.getElementById('entityHabitatManualGroup');
  const entityHabitatManual = document.getElementById('entityHabitatManual');
  const entityDangerSelector = document.getElementById('entityDanger');

  const parentLevelSelector = document.getElementById('parentLevelSelector');
  const sublevelDifferencesInput = document.getElementById('sublevelDifferences');
  const sublevelResemblanceInput = document.getElementById('sublevelResemblance');
  const sublevelDescriptionInput = document.getElementById('sublevelDescription');
  const sublevelEntitiesInput = document.getElementById('sublevelEntities');
  const sublevelResourcesInput = document.getElementById('sublevelResources'); 
  const sublevelEntrancesInput = document.getElementById('sublevelEntrances'); 
  const sublevelExitsInput = document.getElementById('sublevelExits');     
  const sublevelNumberInput = document.getElementById('sublevelNumber'); 
  const sublevelStructuresInput = document.getElementById('sublevelStructures'); 
  const generateSubLevelTextBtn = document.getElementById('generateSubLevelTextBtn');
  const generateSubLevelImageBtn = document.getElementById('generateSubLevelImageBtn');
  const subLevelDescriptionContainer = document.getElementById('subLevelDescriptionContainer');
  const subLevelImageContainer = document.getElementById('subLevelImageContainer');
  const saveSubLevelBtn = document.getElementById('saveSubLevelBtn');
  const sublevelImageStyleSelector = document.getElementById('sublevelImageStyle'); 

  const saveLevelBtn = document.getElementById('saveLevelBtn');
  const saveEntityBtn = document.getElementById('saveEntityBtn');
  const savedLevelsList = document.getElementById('savedLevelsList');
  const savedEntitiesList = document.getElementById('savedEntitiesList');
  const savedSubLevelsList = document.getElementById('savedSubLevelsList'); 
  const savedLevelsCount = document.getElementById('savedLevelsCount');
  const savedEntitiesCount = document.getElementById('savedEntitiesCount');
  const savedSubLevelsCount = document.getElementById('savedSubLevelsCount'); 

  const expeditionsBtn = document.getElementById('expeditionsBtn');
  const expeditionModal = document.getElementById('expeditionModal');
  const closeModalBtn = expeditionModal.querySelector('.close-button');
  const expeditionTypeSelect = document.getElementById('expeditionTypeSelect');
  const expeditionTargetSelect = document.getElementById('expeditionTargetSelect');
  const expeditionCharacterRadios = document.querySelectorAll('input[name="expeditionCharacter"]');
  const characterGenderRadios = document.querySelectorAll('input[name="characterGender"]'); 
  const startExpeditionBtn = document.getElementById('startExpeditionBtn');
  const expeditionReportContainer = document.getElementById('expeditionReportContainer');

  const entityCard = document.querySelector('.entity-generator');
  const sublevelCard = document.querySelector('.sublevel-generator');
  const entityToggleBtn = document.getElementById('entityToggleBtn');
  const sublevelToggleBtn = document.getElementById('sublevelToggleBtn');

  const entityRelationsContainer = document.getElementById('entityRelationsContainer');
  const addRelationBtn = document.getElementById('addRelationBtn');

  const MAX_LEVELS = 55;
  const MAX_ENTITIES = 75;
  const MAX_SUB_LEVELS = 65; 

  let currentLoadedEntityId = null; 

  const relationshipTypes = [
    'Evolution Of', 'Parent Of', 'Variant Of', 'Prey Of', 'Predator Of', 'Coexists With', 'Antagonist To'
  ];

  const baseEntities = [
    {
      entityName: "Smiler",
      entityLook: "black big entity with a big spider body that is invisible in the dark, it has a glowing white smile and two white eyes that can be seen in the dark",
      entityPowers: "invisible in the dark, attacks any light sources",
      entityDanger: "Deadly, extremely dangerous",
      entityOther: "hates lights and attacks any of them"
    },
    {
      entityName: "Bacteria",
      entityLook: "tall entity made of black entangled wires",
      entityPowers: "highly aggressive, runs fastly at any wanderers",
      entityDanger: "Deadly, extremely dangerous",
      entityOther: "highly aggressive and runs fastly at any wanderers"
    },
    {
      entityName: "Partygoer",
      entityLook: "humanoid yellow things that hide their body with a yellow big paper costume and a red happy face on it, the costume has two mouths instead of hands",
      entityPowers: "organizes 'DEADLY parties' with human-based cakes",
      entityDanger: "Deadly, extremely dangerous",
      entityOther: "loves DEADLY parties where the cakes are human"
    },
    {
      entityName: "Frowner",
      entityLook: "black entities with a black big fox body that is invisible in the dark and a frowning glowing white face",
      entityPowers: "normally passive",
      entityDanger: "Safe (Passive, harmless)",
      entityOther: "hates smilers"
    }
  ];

  const getSavedLevels = () => {
    const levels = localStorage.getItem('backroomsLevels');
    return levels ? JSON.parse(levels) : [];
  };

  const saveLevels = (levels) => {
    localStorage.setItem('backroomsLevels', JSON.stringify(levels));
  };

  const getSavedEntities = () => {
    const entities = localStorage.getItem('backroomsEntities');
    return entities ? JSON.parse(entities) : [];
  };

  const saveEntities = (entities) => {
    localStorage.setItem('backroomsEntities', JSON.stringify(entities));
  };

  const getSavedSubLevels = () => {
    const subLevels = localStorage.getItem('backroomsSubLevels');
    return subLevels ? JSON.parse(subLevels) : [];
  };

  const saveSubLevels = (subLevels) => {
    localStorage.setItem('backroomsSubLevels', JSON.stringify(subLevels));
  };

  const findLevelById = (id) => getSavedLevels().find(level => level.id === id);
  const findEntityById = (id) => getSavedEntities().find(entity => entity.id === id);
  const findSubLevelById = (id) => getSavedSubLevels().find(subLevel => subLevel.id === id);

  const populateParentLevelDropdown = () => {
    const levels = getSavedLevels();
    parentLevelSelector.innerHTML = '<option value="">Select a Parent Level</option>'; 
    if (levels.length === 0) {
        parentLevelSelector.disabled = true;
    } else {
        parentLevelSelector.disabled = false;
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level.id;
            option.textContent = level.levelNumber || 'Untitled Level';
            parentLevelSelector.appendChild(option);
        });
    }
  };

  const populateHabitatOptions = () => {
    const levels = getSavedLevels(); const subs = getSavedSubLevels();
    entityHabitatsSelect.innerHTML = '';
    const addOpt = (val, label) => { const o=document.createElement('option'); o.value=val; o.textContent=label; entityHabitatsSelect.appendChild(o); };
    addOpt('manual','Manual Input');
    levels.forEach(l=>addOpt(`L:${l.id}`, `Level ${l.levelNumber||'Untitled'}`));
    subs.forEach(s=>addOpt(`S:${s.id}`, s.sublevelNumber?`Sub-Level ${s.sublevelNumber}`:`Sub-Level (${s.id.slice(-4)})`));
  };

  const populateEntityDropdown = (selectElement, excludeId = null) => {
    const entities = getSavedEntities();
    selectElement.innerHTML = '<option value="">Select Entity</option>';
    if (entities.length === 0) {
      selectElement.disabled = true;
    } else {
      selectElement.disabled = false;
      entities.forEach(entity => {
        if (entity.id !== excludeId) { 
          const option = document.createElement('option');
          option.value = entity.id;
          option.textContent = entity.entityName || (entity.entityLook ? entity.entityLook.substring(0, 30) + '...' : 'Untitled Entity');
          selectElement.appendChild(option);
        }
      });
    }
  };

  const addRelationRow = (relationType = '', targetEntityId = '', excludeSelfId = null) => {
    const relationRow = document.createElement('div');
    relationRow.classList.add('relation-row');

    const typeSelect = document.createElement('select');
    typeSelect.classList.add('relation-type-select');
    relationshipTypes.forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      typeSelect.appendChild(option);
    });
    typeSelect.value = relationType;

    const targetSelect = document.createElement('select');
    targetSelect.classList.add('relation-target-select');
    populateEntityDropdown(targetSelect, excludeSelfId); 
    targetSelect.value = targetEntityId; 

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.classList.add('remove-relation-btn', 'small-button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      relationRow.remove();
    });

    relationRow.appendChild(typeSelect);
    relationRow.appendChild(targetSelect);
    relationRow.appendChild(removeBtn);
    entityRelationsContainer.appendChild(relationRow);
  };

  const renderSavedLevels = () => {
    const levels = getSavedLevels();
    savedLevelsList.innerHTML = ''; 
    savedLevelsCount.textContent = levels.length;

    levels.forEach(level => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-id', level.id);
      listItem.innerHTML = `
        <span class="saved-item-info">${level.levelNumber || 'Untitled Level'} (Class ${level.levelClass || 'Unknown Class'}, ${level.safety}, ${level.security})</span>
        <div class="saved-item-buttons">
          <button class="load-btn">Load</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
      savedLevelsList.appendChild(listItem);
    });
    populateParentLevelDropdown(); 
    populateHabitatOptions();
  };

  const renderSavedEntities = () => {
    const entities = getSavedEntities();
    savedEntitiesList.innerHTML = ''; 
    savedEntitiesCount.textContent = entities.length;

    entities.forEach(entity => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-id', entity.id);
      const displayName = entity.entityName || (entity.entityLook ? entity.entityLook.substring(0, 30) + '...' : 'Untitled Entity');
      listItem.innerHTML = `
        <span class="saved-item-info">Entity: ${displayName} (Danger: ${entity.entityDanger})</span>
         <div class="saved-item-buttons">
          <button class="load-btn">Load</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
      savedEntitiesList.appendChild(listItem);
    });
  };

  const renderSavedSubLevels = () => {
    const subLevels = getSavedSubLevels();
    const allLevels = getSavedLevels(); 
    savedSubLevelsList.innerHTML = '';
    savedSubLevelsCount.textContent = subLevels.length;

    subLevels.forEach(subLevel => {
        const parentLevel = allLevels.find(level => level.id === subLevel.parentId);
        const parentName = parentLevel ? (parentLevel.levelNumber || 'Untitled Parent Level') : 'Unknown Parent Level';
        const subLevelDisplayName = subLevel.sublevelNumber ? `Sub-Level ${subLevel.sublevelNumber}` : `Sub-Level of ${parentName} (ID: ${subLevel.id.substring(subLevel.id.length - 4)})`;

        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', subLevel.id);
        listItem.innerHTML = `
            <span class="saved-item-info">${subLevelDisplayName}</span>
            <div class="saved-item-buttons">
                <button class="load-btn">Load</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        savedSubLevelsList.appendChild(listItem);
    });
    populateHabitatOptions();
  };

  const loadLevel = (id) => {
    const levels = getSavedLevels();
    const levelToLoad = levels.find(level => level.id === id);
    if (levelToLoad) {
      levelNumberInput.value = levelToLoad.levelNumber;
      levelClassSelector.value = levelToLoad.levelClass;
      toggleCustomClass();
      customClassNameInput.value = levelToLoad.customClassName || '';
      // safety/security/entityCount selection + custom fields
      const safetySel = levelToLoad.safetySelection || levelToLoad.safety || 'Safe';
      document.querySelector(`input[name="safety"][value="${['Safe','Unsafe','Custom'].includes(safetySel)?safetySel:'Safe'}"]`).checked = true;
      customSafetyNameInput.value = levelToLoad.customSafetyName || '';
      toggleCustomSafety();
      const securitySel = levelToLoad.securitySelection || levelToLoad.security || 'Secure';
      document.querySelector(`input[name="security"][value="${['Secure','Unsecure','Custom'].includes(securitySel)?securitySel:'Secure'}"]`).checked = true;
      customSecurityNameInput.value = levelToLoad.customSecurityName || '';
      toggleCustomSecurity();
      entityCountSelector.value = levelToLoad.entityCountSelection || levelToLoad.entityCount || 'Devoid of entities';
      customEntityCountInput.value = levelToLoad.customEntityCount || '';
      toggleCustomEntityCount();
      levelStructuresInput.value = levelToLoad.structures || ''; 
      levelImageStyleSelector.value = levelToLoad.imageStyle || 'realistic'; 
      coloniesInput.value = levelToLoad.colonies || '';

      survivalGuideText.value = levelToLoad.survivalGuideText || '';
      foundFootagesText.value = levelToLoad.foundFootagesText || '';
      foundNotesText.value = levelToLoad.foundNotesText || '';
      theoriesText.value = levelToLoad.theoriesText || '';
      incidentReportsText.value = levelToLoad.incidentReportsText || '';
      revisionsText.value = levelToLoad.revisionsText || '';
      addendumText.value = levelToLoad.addendumText || '';
      explorerReportsText.value = levelToLoad.explorerReportsText || '';
      testLogsText.value = levelToLoad.testLogsText || '';
      interviewsText.value = levelToLoad.interviewsText || '';
      discoveryText.value = levelToLoad.discoveryText || '';
      archivedDocsText.value = levelToLoad.archivedDocsText || '';
      audioTranscriptsText.value = levelToLoad.audioTranscriptsText || '';
      timelineText.value = levelToLoad.timelineText || '';
      addendumToggle.dataset.active = levelToLoad.addendumEnabled ? 'true' : 'false';
      explorerReportsToggle.dataset.active = levelToLoad.explorerReportsEnabled ? 'true' : 'false';
      testLogsToggle.dataset.active = levelToLoad.testLogsEnabled ? 'true' : 'false';
      interviewsToggle.dataset.active = levelToLoad.interviewsEnabled ? 'true' : 'false';
      discoveryToggle.dataset.active = levelToLoad.discoveryEnabled ? 'true' : 'false';
      archivedDocsToggle.dataset.active = levelToLoad.archivedDocsEnabled ? 'true' : 'false';
      audioTranscriptsToggle.dataset.active = levelToLoad.audioTranscriptsEnabled ? 'true' : 'false';
      timelineToggle.dataset.active = levelToLoad.timelineEnabled ? 'true' : 'false';
      addendumGroup.style.display = addendumToggle.dataset.active === 'true' ? 'block' : 'none';
      explorerReportsGroup.style.display = explorerReportsToggle.dataset.active === 'true' ? 'block' : 'none';
      testLogsGroup.style.display = testLogsToggle.dataset.active === 'true' ? 'block' : 'none';
      interviewsGroup.style.display = interviewsToggle.dataset.active === 'true' ? 'block' : 'none';
      discoveryGroup.style.display = discoveryToggle.dataset.active === 'true' ? 'block' : 'none';
      archivedDocsGroup.style.display = archivedDocsToggle.dataset.active === 'true' ? 'block' : 'none';
      audioTranscriptsGroup.style.display = audioTranscriptsToggle.dataset.active === 'true' ? 'block' : 'none';
      timelineGroup.style.display = timelineToggle.dataset.active === 'true' ? 'block' : 'none';
      survivalGuideToggle.dataset.active = levelToLoad.survivalGuideEnabled ? 'true' : 'false';
      foundFootagesToggle.dataset.active = levelToLoad.foundFootagesEnabled ? 'true' : 'false';
      foundNotesToggle.dataset.active = levelToLoad.foundNotesEnabled ? 'true' : 'false';
      theoriesToggle.dataset.active = levelToLoad.theoriesEnabled ? 'true' : 'false';
      incidentReportsToggle.dataset.active = levelToLoad.incidentReportsEnabled ? 'true' : 'false';
      revisionsToggle.dataset.active = levelToLoad.revisionsEnabled ? 'true' : 'false';
      addendumToggle.dataset.active = levelToLoad.addendumEnabled ? 'true' : 'false';
      explorerReportsToggle.dataset.active = levelToLoad.explorerReportsEnabled ? 'true' : 'false';
      testLogsToggle.dataset.active = levelToLoad.testLogsEnabled ? 'true' : 'false';
      interviewsToggle.dataset.active = levelToLoad.interviewsEnabled ? 'true' : 'false';
      discoveryToggle.dataset.active = levelToLoad.discoveryEnabled ? 'true' : 'false';
      archivedDocsToggle.dataset.active = levelToLoad.archivedDocsEnabled ? 'true' : 'false';
      audioTranscriptsToggle.dataset.active = levelToLoad.audioTranscriptsEnabled ? 'true' : 'false';
      timelineToggle.dataset.active = levelToLoad.timelineEnabled ? 'true' : 'false';
      survivalGuideGroup.style.display = survivalGuideToggle.dataset.active === 'true' ? 'block' : 'none';
      foundFootagesGroup.style.display = foundFootagesToggle.dataset.active === 'true' ? 'block' : 'none';
      foundNotesGroup.style.display = foundNotesToggle.dataset.active === 'true' ? 'block' : 'none';
      theoriesGroup.style.display = theoriesToggle.dataset.active === 'true' ? 'block' : 'none';
      incidentReportsGroup.style.display = incidentReportsToggle.dataset.active === 'true' ? 'block' : 'none';
      revisionsGroup.style.display = revisionsToggle.dataset.active === 'true' ? 'block' : 'none';
      addendumGroup.style.display = addendumToggle.dataset.active === 'true' ? 'block' : 'none';
      explorerReportsGroup.style.display = explorerReportsToggle.dataset.active === 'true' ? 'block' : 'none';
      testLogsGroup.style.display = testLogsToggle.dataset.active === 'true' ? 'block' : 'none';
      interviewsGroup.style.display = interviewsToggle.dataset.active === 'true' ? 'block' : 'none';
      discoveryGroup.style.display = discoveryToggle.dataset.active === 'true' ? 'block' : 'none';
      archivedDocsGroup.style.display = archivedDocsToggle.dataset.active === 'true' ? 'block' : 'none';
      audioTranscriptsGroup.style.display = audioTranscriptsToggle.dataset.active === 'true' ? 'block' : 'none';
      timelineGroup.style.display = timelineToggle.dataset.active === 'true' ? 'block' : 'none';

      if (levelToLoad.generatedText) {
        textDescriptionContainer.textContent = levelToLoad.generatedText;
        textDescriptionContainer.style.display = 'block';
      } else {
        textDescriptionContainer.style.display = 'none';
        textDescriptionContainer.textContent = '';
      }
      if (levelToLoad.generatedImageUrl) {
        imageContainer.innerHTML = ''; 
        const levelImage = document.createElement('img');
        levelImage.src = levelToLoad.generatedImageUrl;
        levelImage.alt = `Image of ${levelToLoad.levelNumber || 'Level'}`;
        imageContainer.appendChild(levelImage);
        imageContainer.style.display = 'block';
      } else {
        imageContainer.style.display = 'none';
        imageContainer.innerHTML = '';
      }
      writingStyleSelector.value = levelToLoad.writingStyle || writingStyleSelector.value || 'Clinical (Standard)';
      customWritingStyleNameInput.value = levelToLoad.customWritingStyleName || '';
      customWritingStyleInstructionsInput.value = levelToLoad.customWritingStyleInstructions || '';
      toggleCustomWritingStyle();
    }
  };

  const deleteLevel = (id) => {
    let levels = getSavedLevels();
    levels = levels.filter(level => level.id !== id);
    saveLevels(levels);
    renderSavedLevels();
    renderSavedSubLevels(); 
  };

  const loadEntity = (id) => {
    const entities = getSavedEntities();
    const entityToLoad = entities.find(entity => entity.id === id);
    if (entityToLoad) {
      entityNameInput.value = entityToLoad.entityName || ''; 
      entityDescriptionInput.value = entityToLoad.entityDescription || entityToLoad.entityOther || entityToLoad.entityLook || '';
      entityBehaviorsInput.value = entityToLoad.entityBehaviors || entityToLoad.entityPowers || '';
      entityBiologyInput.value = entityToLoad.entityBiology || entityToLoad.entityLook || '';
      entityDiscoveryInput.value = entityToLoad.entityDiscovery || '';
      entityAdditionalInput.value = entityToLoad.entityAdditional || entityToLoad.entityOther || '';
      entityDosDontsInput.value = entityToLoad.entityDosDonts || '';
      entityDangerSelector.value = entityToLoad.entityDanger;
      entityImageStyleSelector.value = entityToLoad.imageStyle || 'realistic'; 
      populateHabitatOptions();
      const sel = new Set(entityToLoad.habitatsSelected || []);
      Array.from(entityHabitatsSelect.options).forEach(o=>o.selected=sel.has(o.value));
      entityHabitatManual.value = entityToLoad.habitatManual || '';
      entityHabitatManualGroup.style.display = sel.has('manual') ? 'block' : 'none';

      currentLoadedEntityId = id;

      entityRelationsContainer.innerHTML = '';
      if (entityToLoad.relations && entityToLoad.relations.length > 0) {
        entityToLoad.relations.forEach(rel => {
          addRelationRow(rel.type, rel.targetId, id);
        });
      }

       if (entityToLoad.generatedText) {
        entityDescriptionContainer.textContent = entityToLoad.generatedText;
        entityDescriptionContainer.style.display = 'block';
      } else {
        entityDescriptionContainer.style.display = 'none';
        entityDescriptionContainer.textContent = '';
      }
      if (entityToLoad.generatedImageUrl) {
        entityImageContainer.innerHTML = ''; 
        const entityImage = document.createElement('img');
        entityImage.src = entityToLoad.generatedImageUrl;
        entityImage.alt = `Image of entity`;
        entityImageContainer.appendChild(entityImage);
         entityImageContainer.style.display = 'block';
      } else {
        entityImageContainer.style.display = 'none';
        entityImageContainer.innerHTML = '';
      }
    }
  };

  const deleteEntity = (id) => {
    let entities = getSavedEntities();
    entities.forEach(entity => {
        if (entity.relations) {
            entity.relations = entity.relations.filter(rel => rel.targetId !== id);
        }
    });
    entities = entities.filter(entity => entity.id !== id);
    saveEntities(entities);
    renderSavedEntities();
  };

  const loadSubLevel = (id) => {
    const subLevels = getSavedSubLevels();
    const subLevelToLoad = subLevels.find(subLevel => subLevel.id === id);
    if (subLevelToLoad) {
        parentLevelSelector.value = subLevelToLoad.parentId || '';
        sublevelDifferencesInput.value = subLevelToLoad.differences;
        sublevelResemblanceInput.value = subLevelToLoad.resemblance;
        sublevelDescriptionInput.value = subLevelToLoad.description;
        sublevelEntitiesInput.value = subLevelToLoad.entities;
        sublevelResourcesInput.value = subLevelToLoad.resources || ''; 
        sublevelEntrancesInput.value = subLevelToLoad.entrances || ''; 
        sublevelExitsInput.value = subLevelToLoad.exits || '';     
        sublevelNumberInput.value = subLevelToLoad.sublevelNumber || ''; 
        sublevelStructuresInput.value = subLevelToLoad.structures || ''; 
        sublevelImageStyleSelector.value = subLevelToLoad.imageStyle || 'realistic'; 

        if (subLevelToLoad.generatedText) {
            subLevelDescriptionContainer.textContent = subLevelToLoad.generatedText;
            subLevelDescriptionContainer.style.display = 'block';
        } else {
            subLevelDescriptionContainer.style.display = 'none';
            subLevelDescriptionContainer.textContent = '';
        }
        if (subLevelToLoad.generatedImageUrl) {
            subLevelImageContainer.innerHTML = '';
            const subLevelImage = document.createElement('img');
            subLevelImage.src = subLevelToLoad.generatedImageUrl;
            subLevelImage.alt = `Image of sub-level of ${subLevelToLoad.parentId || 'Level'}`;
            subLevelImageContainer.appendChild(subLevelImage);
            subLevelImageContainer.style.display = 'block';
        } else {
            subLevelImageContainer.style.display = 'none';
            subLevelImageContainer.innerHTML = '';
        }
    }
  };

  const deleteSubLevel = (id) => {
    let subLevels = getSavedSubLevels();
    subLevels = subLevels.filter(subLevel => subLevel.id !== id);
    saveSubLevels(subLevels);
    renderSavedSubLevels();
  };

  savedLevelsList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('load-btn')) {
      const id = target.closest('li').getAttribute('data-id');
      loadLevel(id);
    } else if (target.classList.contains('delete-btn')) {
      const id = target.closest('li').getAttribute('data-id');
      if (confirm('Are you sure you want to delete this level?')) {
        deleteLevel(id);
      }
    }
  });

  savedEntitiesList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('load-btn')) {
      const id = target.closest('li').getAttribute('data-id');
      loadEntity(id);
    } else if (target.classList.contains('delete-btn')) {
      const id = target.closest('li').getAttribute('data-id');
       if (confirm('Are you sure you want to delete this entity?')) {
        deleteEntity(id);
      }
    }
  });

  savedSubLevelsList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('load-btn')) {
        const id = target.closest('li').getAttribute('data-id');
        loadSubLevel(id);
    } else if (target.classList.contains('delete-btn')) {
        const id = target.closest('li').getAttribute('data-id');
        if (confirm('Are you sure you want to delete this sub-level?')) {
            deleteSubLevel(id);
        }
    }
  });

  generateImageBtn.addEventListener('click', async () => {
    const levelNumber = levelNumberInput.value || 'an unknown level';
    const characteristics = characteristicsInput.value || 'standard unsettling backrooms features';
    const phenomena = phenomenaInput.value || 'no notable phenomena';
    const objects = objectsInput.value || 'few or no notable objects';
    const entities = entitiesInput.value || 'no specific entities mentioned';
    const entrances = entrancesInput.value || 'typical backrooms entrances';
    const exits = exitsInput.value || 'typical backrooms exits';
    const structures = levelStructuresInput.value || 'no specific structures'; 
    const imageStyle = levelImageStyleSelector.value; 

    const levelClass = getSelectedClass();
    const safety = getSelectedSafety();
    const security = getSelectedSecurity();
    const entityCount = getSelectedEntityCount();

    let promptPrefix = '';
    let promptBase = `unsettling, and liminal image of Backrooms Level ${levelNumber}, Class ${levelClass}, Safety ${safety}, Security ${security}, with ${entityCount}. Visually depict: ${characteristics}. Hint at phenomena: ${phenomena}. Show notable objects: ${objects}. Include subtle visual suggestions of entities: ${entities}. The scene should feel eerie, abandoned, and vast, like a found photograph. Use a color palette similar to the provided background image, favoring yellows, browns, and muted tones. Generate a high-quality image that clearly represents the described elements. Include visual representations of structures: ${structures}.`;

    if (imageStyle === 'realistic') {
        promptPrefix = 'A photorealistic, ';
    } else if (imageStyle === 'anime') {
        promptPrefix = 'An anime style, ';
    } else if (imageStyle === 'retro') { 
        promptPrefix = 'A pixelized, 8-bit, retro game style, '; 
    } else if (imageStyle === 'random') {
        promptPrefix = 'A highly abstract, surreal, and wildly imaginative artistic rendition of ';
    } else if (imageStyle === 'lab-test') {
        promptPrefix = 'A photorealistic, documentary-style scene in a sterile laboratory with scientists in PPE testing ';
    }
    
    let prompt = promptPrefix + promptBase;

    try {
      imageContainer.innerHTML = 'Generating image...';
      imageContainer.style.display = 'block';

      const result = await websim.imageGen({
        prompt: prompt,
        aspect_ratio: "16:9",
      });
      if (result && result.url) {
        const levelImage = document.createElement('img');
        levelImage.src = result.url;
        levelImage.alt = `Image of ${levelNumber}`;
        imageContainer.innerHTML = ''; 
        imageContainer.appendChild(levelImage);
      } else {
        imageContainer.textContent = 'Error generating image. Please try again or refine your inputs.';
      }
    } catch (error) {
      console.error("Image generation failed:", error);
      imageContainer.textContent = 'Error generating image. Please check your network connection or try again later.';
    }
  });

  generateTextBtn.addEventListener('click', async () => {
    const levelNumber = levelNumberInput.value || 'an unknown level';
    const levelClass = getSelectedClass();
    const safety = getSelectedSafety();
    const security = getSelectedSecurity();
    const entityCount = getSelectedEntityCount();
    const characteristics = characteristicsInput.value || 'standard unsettling backrooms features';
    const phenomena = phenomenaInput.value || 'no notable phenomena';
    const objects = objectsInput.value || 'few or no notable objects';
    const entities = entitiesInput.value || 'no specific entities mentioned';
    const entrances = entrancesInput.value || 'typical backrooms entrances';
    const exits = exitsInput.value || 'typical backrooms exits';
    const wordCount = wordCountSelector.value;
    const structures = levelStructuresInput.value || 'no specific structures'; 
    const colonies = coloniesInput.value || 'no known colonies or outposts';
    const writingStyle = writingStyleSelector.value;
    const customStyleName = customWritingStyleNameInput.value?.trim();
    const customStyleInstr = customWritingStyleInstructionsInput.value?.trim();

    // New: Optional sections
    const extraSections =
      (survivalGuideToggle.dataset.active === 'true' && survivalGuideText.value ? `\nSurvival Guide: ${survivalGuideText.value}` : '') +
      (foundFootagesToggle.dataset.active === 'true' && foundFootagesText.value ? `\nFound Footage: ${foundFootagesText.value}` : '') +
      (foundNotesToggle.dataset.active === 'true' && foundNotesText.value ? `\nFound Notes/Logs: ${foundNotesText.value}` : '') +
      (theoriesToggle.dataset.active === 'true' && theoriesText.value ? `\nTheories: ${theoriesText.value}` : '') +
      (incidentReportsToggle.dataset.active === 'true' && incidentReportsText.value ? `\nIncident Reports: ${incidentReportsText.value}` : '') +
      (revisionsToggle.dataset.active === 'true' && revisionsText.value ? `\nRevisions: ${revisionsText.value}` : '') +
      (addendumToggle.dataset.active === 'true' && addendumText.value ? `\nAddendum: ${addendumText.value}` : '') +
      (explorerReportsToggle.dataset.active === 'true' && explorerReportsText.value ? `\nExplorer Reports: ${explorerReportsText.value}` : '') +
      (testLogsToggle.dataset.active === 'true' && testLogsText.value ? `\nTest Logs: ${testLogsText.value}` : '') +
      (interviewsToggle.dataset.active === 'true' && interviewsText.value ? `\nInterviews: ${interviewsText.value}` : '') +
      (discoveryToggle.dataset.active === 'true' && discoveryText.value ? `\nDiscovery: ${discoveryText.value}` : '') +
      (archivedDocsToggle.dataset.active === 'true' && archivedDocsText.value ? `\nArchived Documents: ${archivedDocsText.value}` : '') +
      (audioTranscriptsToggle.dataset.active === 'true' && audioTranscriptsText.value ? `\nAudio Transcripts: ${audioTranscriptsText.value}` : '') +
      (timelineToggle.dataset.active === 'true' && timelineText.value ? `\nTimeline: ${timelineText.value}` : '');

    let entitiesForPrompt = [...getSavedEntities()]; 
    const entitiesInputValueLower = entities.toLowerCase();

    baseEntities.forEach(baseEntity => {
        if (entitiesInputValueLower.includes(baseEntity.entityName.toLowerCase())) {
            entitiesForPrompt.push(baseEntity);
        }
    });

    let entityContext = '';
    if (entitiesForPrompt.length > 0) {
        entityContext += '\n\n**Known Entities for potential integration (incorporate these only if fitting):**\n';
        entitiesForPrompt.forEach(entity => {
            const name = entity.entityName || 'Unnamed Entity';
            const look = entity.entityLook ? entity.entityLook.substring(0, 50) + (entity.entityLook.length > 50 ? '...' : '') : 'no specific look';
            const danger = entity.entityDanger || 'Unknown Danger';
            entityContext += `- Name: "${name}" (Look: ${look}, Danger: ${danger})\n`;
        });
        entityContext += 'You may use details from these entities to enrich the "Entities" section if they align with the level\'s theme, or suggest new ones if preferred.\n';
    }

    let prompt = `Write a detailed and unsettling description of Backrooms Level ${levelNumber} in the style of a clinical database document. Format it with clear sections for:
Level Name: ${levelNumber}
Class: ${levelClass}
Safety: ${safety}
Security: ${security}
Entity Count: ${entityCount}
Description: Describe the level's environment and architecture based on these characteristics: ${characteristics}.
Phenomena: Detail any unusual events or physical laws: ${phenomena}.
Objects: List and describe any significant items or features: ${objects}.
Structures: Describe any significant permanent structures or geological formations: ${structures}.
Colonies & Outposts: Describe any known colonies, outposts, or settlements operating within the level: ${colonies}.
Entities: Describe the known inhabitants: ${entities}.
Entrances: Explain how one might arrive at this level: ${entrances}.
Exits: Explain how one might leave this level: ${exits}.` + extraSections + `
Ensure the tone is objective, academic, and slightly unnerving. The total description should be approximately ${wordCount}. The description MUST include all specified sections (Level Name, Class, Safety, Security, Entity Count, Description, Phenomena, Objects, Entities, Entrances, Exits) and be coherent and comprehensive, using details provided in the input fields where available, and generating appropriate information where fields are empty.${entityContext}
Writing style directive: ${
  writingStyle === 'Informal/Personal' ? 'Adopt an informal, first-person, personal tone with candid notes, while still presenting all required sections.'
  : writingStyle === 'Narrative' ? 'Adopt a narrative, atmospheric tone with cohesive storytelling; keep the required sections intact and clearly labeled.'
  : writingStyle === 'Corrupted/Fragmented' ? 'Adopt a corrupted, fragmented tone: broken sentences, glitch markers (█, [DATA REDACTED]), inconsistent formatting; keep sections clearly labeled.'
  : writingStyle === 'Techinical/Scientific' ? 'Adopt a highly technical, scientific tone: precise terminology, procedural language, measurements and hypotheses; retain clear section labels.'
  : writingStyle === 'Satirical/Joke Level' ? 'Adopt a satirical, tongue-in-cheek tone appropriate for a joke level; use humor, irony, and playful exaggeration while keeping sections explicit and intact.'
  : writingStyle === 'Cryptid/Mysterious' ? 'Adopt a cryptid dossier tone: terse, mysterious, rumor-infused, with cautious qualifiers; keep sections explicit and intact.'
  : writingStyle === 'Journal Entry' ? 'Adopt a dated, first-person journal format; introspective and observational; preserve all required sections with clear labels.'
  : writingStyle === 'Custom' ? `Use the custom style "${customStyleName || 'Unnamed Custom Style'}". Follow these exact instructions and tones: ${customStyleInstr || 'No additional instructions provided.'}`
  : 'Maintain an objective, clinical database tone throughout.'
}`;

    try {
      textDescriptionContainer.textContent = 'Generating text description...';
      textDescriptionContainer.style.display = 'block';

      const completion = await websim.chat.completions.create({
        messages: [
          { role: "user", content: prompt },
        ],
      });
      if (completion && completion.content) {
        textDescriptionContainer.textContent = completion.content;
      } else {
        textDescriptionContainer.textContent = 'Error generating text description. No content received. Please try again.';
      }
    } catch (error) {
      console.error("Text generation failed:", error);
      textDescriptionContainer.textContent = 'Error generating text description. Please check your network connection or try again later.';
    }
  });

  generateEntityTextBtn.addEventListener('click', async () => {
    const name = entityNameInput.value || 'an unknown entity';
    const description = entityDescriptionInput.value || 'an indistinct overview';
    const behaviors = entityBehaviorsInput.value || 'unknown behavior patterns';
    const biology = entityBiologyInput.value || 'unclear biological features';
    const discovery = entityDiscoveryInput.value || 'discovery details unrecorded';
    const additional = entityAdditionalInput.value || 'no additional notes';
    const dosDonts = entityDosDontsInput.value || 'no encounter guidelines';
    const danger = entityDangerSelector.value;

    const relations = [];
    entityRelationsContainer.querySelectorAll('.relation-row').forEach(row => {
        const type = row.querySelector('.relation-type-select').value;
        const targetId = row.querySelector('.relation-target-select').value;
        if (type && targetId) {
            const targetEntity = findEntityById(targetId);
            if (targetEntity) {
                relations.push({ type, targetEntityName: targetEntity.entityName || 'Unnamed Entity', targetEntityDanger: targetEntity.entityDanger || 'Unknown Danger' });
            }
        }
    });

    let relationsContext = '';
    if (relations.length > 0) {
        relationsContext += '\n\n**Known Relationships (integrate these into the description):**\n';
        relations.forEach(rel => {
            relationsContext += `- This entity is the "${rel.type.toLowerCase()}" of "${rel.targetEntityName}" (Danger: ${rel.targetEntityDanger}).\n`;
        });
        relationsContext += 'Incorporate these relationships naturally into the "Other Characteristics" or a new "Relationships" section.';
    }

    let entitiesForPrompt = [];
    const combinedTextLower = [description, behaviors, biology, additional].join(' ').toLowerCase();

    baseEntities.forEach(baseEntity => {
        if (combinedTextLower.includes(baseEntity.entityName.toLowerCase())) {
            entitiesForPrompt.push(baseEntity);
        }
    });

    let entityContext = '';
    if (entitiesForPrompt.length > 0) {
        entityContext += '\n\n**Known Entities for potential integration into "Other Characteristics" (incorporate these only if fitting):**\n';
        entitiesForPrompt.forEach(entity => {
            const entName = entity.entityName || 'Unnamed Entity';
            const entLook = entity.entityLook ? entity.entityLook.substring(0, 50) + (entity.entityLook.length > 50 ? '...' : '') : 'no specific look';
            const entDanger = entity.entityDanger || 'Unknown Danger';
            entityContext += `- Name: "${entName}" (Look: ${entLook}, Danger: ${entDanger})\n`;
        });
        entityContext += 'You may use details from these entities to enrich the "Other Characteristics" section, specifically for interactions or relationships, or suggest new ones if preferred. For example, "[CUSTOM ENTITY] has been observed interacting with [Smiler]".\n';
    }

    const habitatVals = Array.from(entityHabitatsSelect.selectedOptions).map(o=>o.value);
    const habitatNames = habitatVals.filter(v=>v!=='manual').map(v=>{
      if(v.startsWith('L:')){ const L=findLevelById(v.slice(2)); return L?`Level ${L.levelNumber||'Untitled'}`:null; }
      if(v.startsWith('S:')){ const S=findSubLevelById(v.slice(2)); return S?(S.sublevelNumber?`Sub-Level ${S.sublevelNumber}`:`Sub-Level (${S.id.slice(-4)})`):null; }
      return null;
    }).filter(Boolean);
    const habitatSummary = [habitatNames.join(', ')].filter(Boolean).concat(entityHabitatManual.value?.trim()||'').filter(Boolean).join(' | ');

    let prompt = `Write a clinical, unsettling description of a Backrooms entity named "${name}" as if it were a database document. Format it with clear sections:
Entity Name: ${name}
Habitat(s): ${habitatSummary || 'Unknown/varied environments'}
Danger Level: State its threat level: ${danger}.
Description: Describe the entity's characteristics, looks, abilities, etc: ${description}
Behaviors: Detail how the Entity acts and behaves: ${behaviors}
Biology: Go in depth on what the Entity looks like: ${biology}
Discovery: Make a story of how the Entity was discovered: ${discovery}
Do and Don'ts: Details of what to do in case of a encounter: ${dosDonts}
Additional Info: Add extra info: ${additional}
${relationsContext}
Maintain an objective, reporting tone that subtly conveys the horror or strangeness of the entity. The description MUST include all specified sections (Entity Name, Habitat, Danger Level, Description, Bheaviors, Biology, Do and Don'ts) and be coherent and complete based on the input. Generate fitting details for any empty fields.${entityContext}`;

    try {
        entityDescriptionContainer.textContent = 'Generating entity description...';
        entityDescriptionContainer.style.display = 'block';

        const completion = await websim.chat.completions.create({
            messages: [
                { role: "user", content: prompt },
            ],
        });
        if (completion && completion.content) {
            entityDescriptionContainer.textContent = completion.content;
        } else {
            entityDescriptionContainer.textContent = 'Error generating entity description. No content received. Please try again.';
        }
    } catch (error) {
        console.error("Entity generation failed:", error);
        entityDescriptionContainer.textContent = 'Error generating entity description. Please check your network connection or try again later.';
    }
  });

  generateEntityImageBtn.addEventListener('click', async () => {
    const imageStyle = entityImageStyleSelector.value;
    const name = entityNameInput.value.trim();
    const biology = entityBiologyInput.value || 'unclear biological form';
    const behaviors = entityBehaviorsInput.value || 'behavior not observed';
    const description = entityDescriptionInput.value || 'vague outline';
    const danger = entityDangerSelector.value;

    let details = `an image of a Backrooms entity.
Name: "${name || 'Unnamed'}"
Biology/Appearance: ${biology}
Behaviors: ${behaviors}
Overall description: ${description}
Danger Level: ${danger}
The image should suit a Backrooms environment.`;

    let promptPrefix = 'A photorealistic ';
    if (imageStyle === 'anime') promptPrefix = 'An anime style ';
    else if (imageStyle === 'retro') promptPrefix = 'A pixelized, 8-bit, retro game style ';
    else if (imageStyle === 'random') promptPrefix = 'A highly abstract, surreal, and wildly imaginative artistic rendition of ';
    else if (imageStyle === 'lab-test') promptPrefix = 'A photorealistic, documentary-style scene in a sterile laboratory with scientists in PPE testing ';

    let prompt = promptPrefix + details;

    try {
      const result = await websim.imageGen({
        prompt: prompt,
        aspect_ratio: "1:1", 
      });
      if (result && result.url) {
        const entityImage = document.createElement('img');
        entityImage.src = result.url;
        entityImage.alt = `Image of Backrooms entity`;
        entityImageContainer.innerHTML = ''; 
        entityImageContainer.appendChild(entityImage);
        entityImageContainer.style.display = 'block';
      } else {
        entityImageContainer.textContent = 'Error generating entity image. Please try again or refine your inputs.';
      }
    } catch (error) {
      console.error("Entity image generation failed:", error);
      entityImageContainer.textContent = 'Error generating entity image. Please check your network connection or try again later.';
    }
  });

  addRelationBtn.addEventListener('click', () => {
    addRelationRow('', '', currentLoadedEntityId);
  });

  generateSubLevelTextBtn.addEventListener('click', async () => {
      const parentLevelId = parentLevelSelector.value;
      if (!parentLevelId) {
          alert('Please select a parent level first.');
          return;
      }

      const allLevels = getSavedLevels();
      const parentLevel = allLevels.find(level => level.id === parentLevelId);

      if (!parentLevel) {
          alert('Selected parent level not found.');
          return;
      }

      const sublevelNumber = sublevelNumberInput.value; 
      const differences = sublevelDifferencesInput.value || 'some subtle differences';
      const resemblance = sublevelResemblanceInput.value || 'it retains core elements';
      const subDescription = sublevelDescriptionInput.value || 'an ambiguous environment';
      const subEntities = sublevelEntitiesInput.value || 'no specific entities mentioned for this sub-level';
      const subResources = sublevelResourcesInput.value || 'no specific resources mentioned'; 
      const subEntrances = sublevelEntrancesInput.value || 'typical sub-level entrances'; 
      const subExits = sublevelExitsInput.value || 'typical sub-level exits';     
      const subStructures = sublevelStructuresInput.value || 'no specific structures'; 

      let entitiesForPrompt = [...getSavedEntities()]; 
      const subEntitiesInputValueLower = subEntities.toLowerCase();

      baseEntities.forEach(baseEntity => {
          if (subEntitiesInputValueLower.includes(baseEntity.entityName.toLowerCase())) {
              entitiesForPrompt.push(baseEntity);
          }
      });

      let entityContext = '';
      if (entitiesForPrompt.length > 0) {
          entityContext += '\n\n**Known Entities for potential integration into this sub-level (incorporate these only if fitting):**\n';
          entitiesForPrompt.forEach(entity => {
              const name = entity.entityName || 'Unnamed Entity';
              const look = entity.entityLook ? entity.entityLook.substring(0, 50) + (entity.entityLook.length > 50 ? '...' : '') : 'no specific look';
              const danger = entity.entityDanger || 'Unknown Danger';
              entityContext += `- Name: "${name}" (Look: ${look}, Danger: ${danger})\n`;
          });
          entityContext += 'You may use details from these entities to enrich the "Entities specific to this sub-level" section if they align with the sub-level\'s characteristics, or suggest new ones if preferred. Focus on entities that would logically exist given the sub-level\'s environment.\n';
      }

      const subLevelIdentifier = sublevelNumber ? `Sub-Level ${sublevelNumber}` : `a sub-level of Level ${parentLevel.levelNumber || 'Unknown'}`;

      let prompt = `You are documenting a sub-level of a known Backrooms Level.
**Parent Level Details (for context and comparison):**
*   Level Number: ${parentLevel.levelNumber || 'Unknown Level'}
*   Class: ${parentLevel.levelClass || 'Unknown Class'}
*   Safety: ${parentLevel.safety || 'Unknown Safety'}
*   Security: ${parentLevel.security || 'Unknown Security'}
*   Entity Count: ${parentLevel.entityCount || 'Unknown'}
*   Characteristics: ${parentLevel.characteristics || 'No specific characteristics.'}
*   Phenomena: ${parentLevel.phenomena || 'No specific phenomena.'}
*   Objects: ${parentLevel.objects || 'No notable objects.'}
*   Entities: ${parentLevel.entities || 'No specific entities.'}
*   Entrances: ${parentLevel.entrances || 'Typical entrances.'}
*   Exits: ${parentLevel.exits || 'Typical exits.'}
*   Structures: ${parentLevel.structures || 'No specific structures.'}

**Sub-Level Details:**
*   Sub-Level Identifier: ${subLevelIdentifier}
*   How it differs from the main level: ${differences}
*   How it resembles the main level: ${resemblance}
*   Specific Environment/Atmosphere of the sub-level: ${subDescription}
*   Entities specific to this sub-level: ${subEntities}
*   Notable Resources/Supplies: ${subResources}
*   Structures specific to this sub-level: ${subStructures}
*   How to enter this sub-level: ${subEntrances}
*   How to exit this sub-level: ${subExits}

Write a detailed, clinical description of this sub-level, explaining its relationship to the parent level. Focus on how the 'Differences' and 'Resemblance' inputs shape its characteristics relative to the parent, and elaborate on its specific environment, entities, resources, entrances, and exits. Maintain an objective, academic, and subtly unnerving tone. The description MUST comprehensively cover all sub-level details specified above, explaining its relationship to the parent level, and be coherent and complete. Generate appropriate information for any empty input fields to ensure a full description.${entityContext}`;

      try {
          subLevelDescriptionContainer.textContent = 'Generating sub-level description...';
          subLevelDescriptionContainer.style.display = 'block';

          const completion = await websim.chat.completions.create({
              messages: [
                  { role: "user", content: prompt },
              ],
          });
          if (completion && completion.content) {
              subLevelDescriptionContainer.textContent = completion.content;
          } else {
              subLevelDescriptionContainer.textContent = 'Error generating sub-level description. No content received. Please try again.';
          }
      } catch (error) {
          console.error("Sub-level text generation failed:", error);
          subLevelDescriptionContainer.textContent = 'Error generating sub-level description. Please check your network connection or try again later.';
      }
  });

  generateSubLevelImageBtn.addEventListener('click', async () => {
    const parentLevelId = parentLevelSelector.value;
      if (!parentLevelId) {
          alert('Please select a parent level first.');
          return;
      }

      const allLevels = getSavedLevels();
      const parentLevel = allLevels.find(level => level.id === parentLevelId);

      if (!parentLevel) {
          alert('Selected parent level not found.');
          return;
      }

      const sublevelNumber = sublevelNumberInput.value; 
      const differences = sublevelDifferencesInput.value || 'some subtle visual differences';
      const resemblance = sublevelResemblanceInput.value || 'retaining core visual elements';
      const subDescription = sublevelDescriptionInput.value || 'an ambiguous and unsettling environment';
      const subEntities = sublevelEntitiesInput.value || 'no specific entities mentioned visually';
      const subResources = sublevelResourcesInput.value || 'no specific resources mentioned visually'; 
      const subEntrances = sublevelEntrancesInput.value || 'typical sub-level entrances visually hinted'; 
      const subExits = sublevelExitsInput.value || 'typical sub-level exits visually hinted';     
      const subStructures = sublevelStructuresInput.value || 'no specific structures visually hinted'; 
      const imageStyle = sublevelImageStyleSelector.value; 

      const subLevelIdentifier = sublevelNumber ? `Sub-Level ${sublevelNumber}` : `a sub-level`;

      let promptPrefix = '';
      let promptBase = `unsettling, and liminal image depicting ${subLevelIdentifier} within the Backrooms.
      The sub-level is connected to Backrooms Level ${parentLevel.levelNumber || 'Unknown Level'} (Class ${parentLevel.levelClass || 'Unknown Class'}, Safety ${parentLevel.safety || 'Unknown Safety'}, Security ${parentLevel.security || 'Unknown Security'}, with ${parentLevel.entityCount || 'Unknown'} entities).
      Visually depict the following for the sub-level:
      - Main visual differences from the parent level: ${differences}
      - Main visual resemblances to the parent level: ${resemblance}
      - Specific environment and atmosphere: ${subDescription}
      - Subtle visual suggestions of entities unique to this sub-level: ${subEntities}
      - Visual representation of notable resources/supplies: ${subResources}
      - Visual cues for structures or formations: ${subStructures}
      - Visual cues for how to enter this sub-level: ${subEntrances}
      - Visual cues for how to exit this sub-level: ${subExits}
      The image should strongly convey the eerie, abandoned, and liminal feeling, showing both connection and distinctness from its parent level. Use a color palette consistent with the Backrooms environment, favoring yellows, browns, and muted tones. Generate a high-quality image that avoids visual artifacts and clearly represents the described elements.`;

      if (imageStyle === 'realistic') {
          promptPrefix = 'A photorealistic, ';
      } else if (imageStyle === 'anime') {
          promptPrefix = 'An anime style, ';
      } else if (imageStyle === 'retro') { 
          promptPrefix = 'A pixelized, 8-bit, retro game style, '; 
      } else if (imageStyle === 'random') {
          promptPrefix = 'A highly abstract, surreal, and wildly imaginative artistic rendition of ';
      } else if (imageStyle === 'lab-test') {
          promptPrefix = 'A photorealistic, documentary-style scene in a sterile laboratory with scientists in PPE testing ';
      }

      let prompt = promptPrefix + promptBase;

      try {
          subLevelImageContainer.innerHTML = 'Generating sub-level image...';
          subLevelImageContainer.style.display = 'block';

          const result = await websim.imageGen({
              prompt: prompt,
              aspect_ratio: "16:9",
          });
          if (result && result.url) {
              const subLevelImage = document.createElement('img');
              subLevelImage.src = result.url;
              subLevelImage.alt = `Image of sub-level of ${parentLevel.levelNumber || 'Level'}`;
              subLevelImageContainer.innerHTML = '';
              subLevelImageContainer.appendChild(subLevelImage);
          } else {
              subLevelImageContainer.textContent = 'Error generating sub-level image. Please try again or refine your inputs.';
          }
      } catch (error) {
          console.error("Sub-level image generation failed:", error);
          subLevelImageContainer.textContent = 'Error generating sub-level image. Please check your network connection or try again later.';
      }
  });

  saveLevelBtn.addEventListener('click', () => {
    const levels = getSavedLevels();
    if (levels.length >= MAX_LEVELS) {
      alert(`You can only save up to ${MAX_LEVELS} levels.`);
      return;
    }

    const safetySelection = document.querySelector('input[name="safety"]:checked').value;
    const securitySelection = document.querySelector('input[name="security"]:checked').value;
    const entityCountSelection = entityCountSelector.value;

    const level = {
      id: Date.now().toString(), 
      levelNumber: levelNumberInput.value,
      levelClass: levelClassSelector.value,
      customClassName: customClassNameInput.value || '',
      safety: getSelectedSafety(),
      safetySelection,
      customSafetyName: customSafetyNameInput.value || '',
      security: getSelectedSecurity(),
      securitySelection,
      customSecurityName: customSecurityNameInput.value || '',
      entityCount: getSelectedEntityCount(),
      entityCountSelection,
      customEntityCount: customEntityCountInput.value || '',
      characteristics: characteristicsInput.value,
      phenomena: phenomenaInput.value,
      objects: objectsInput.value,
      entities: entitiesInput.value,
      entrances: entrancesInput.value,
      exits: exitsInput.value,
      wordCount: wordCountSelector.value,
      structures: levelStructuresInput.value, 
      colonies: coloniesInput.value,
      imageStyle: levelImageStyleSelector.value, 
      generatedText: textDescriptionContainer.style.display !== 'none' ? textDescriptionContainer.textContent : null,
      generatedImageUrl: imageContainer.style.display !== 'none' && imageContainer.querySelector('img') ? imageContainer.querySelector('img').src : null,
      // New: Optional sections persistence
      survivalGuideEnabled: survivalGuideToggle.dataset.active === 'true',
      foundFootagesEnabled: foundFootagesToggle.dataset.active === 'true',
      foundNotesEnabled: foundNotesToggle.dataset.active === 'true',
      theoriesEnabled: theoriesToggle.dataset.active === 'true',
      incidentReportsEnabled: incidentReportsToggle.dataset.active === 'true',
      revisionsEnabled: revisionsToggle.dataset.active === 'true',
      addendumEnabled: addendumToggle.dataset.active === 'true',
      explorerReportsEnabled: explorerReportsToggle.dataset.active === 'true',
      testLogsEnabled: testLogsToggle.dataset.active === 'true',
      interviewsEnabled: interviewsToggle.dataset.active === 'true',
      discoveryEnabled: discoveryToggle.dataset.active === 'true',
      archivedDocsEnabled: archivedDocsToggle.dataset.active === 'true',
      audioTranscriptsEnabled: audioTranscriptsToggle.dataset.active === 'true',
      timelineEnabled: timelineToggle.dataset.active === 'true',
      survivalGuideText: survivalGuideText.value || '',
      foundFootagesText: foundFootagesText.value || '',
      foundNotesText: foundNotesText.value || '',
      theoriesText: theoriesText.value || '',
      incidentReportsText: incidentReportsText.value || '',
      revisionsText: revisionsText.value || '',
      addendumText: addendumText.value || '',
      explorerReportsText: explorerReportsText.value || '',
      testLogsText: testLogsText.value || '',
      interviewsText: interviewsText.value || '',
      discoveryText: discoveryText.value || '',
      archivedDocsText: archivedDocsText.value || '',
      audioTranscriptsText: audioTranscriptsText.value || '',
      timelineText: timelineText.value || '',
      writingStyle: writingStyleSelector.value,
      customWritingStyleName: customWritingStyleNameInput.value || '',
      customWritingStyleInstructions: customWritingStyleInstructionsInput.value || '',
    };

    levels.push(level);
    saveLevels(levels);
    renderSavedLevels();
    alert('Level saved!');
  });

  saveEntityBtn.addEventListener('click', () => {
    const entities = getSavedEntities();
     if (entities.length >= MAX_ENTITIES) {
      alert(`You can only save up to ${MAX_ENTITIES} entities.`);
      return;
    }

    const relations = [];
    entityRelationsContainer.querySelectorAll('.relation-row').forEach(row => {
      const type = row.querySelector('.relation-type-select').value;
      const targetId = row.querySelector('.relation-target-select').value;
      if (type && targetId) { 
        relations.push({ type, targetId });
      }
    });

    const habitatsSelected = Array.from(entityHabitatsSelect.selectedOptions).map(o=>o.value);
    const entity = {
      id: Date.now().toString(), 
      entityName: entityNameInput.value, 
      entityDescription: entityDescriptionInput.value,
      entityBehaviors: entityBehaviorsInput.value,
      entityBiology: entityBiologyInput.value,
      entityDiscovery: entityDiscoveryInput.value,
      entityAdditional: entityAdditionalInput.value,
      entityDosDonts: entityDosDontsInput.value,
      entityDanger: entityDangerSelector.value,
      relations: relations, 
      imageStyle: entityImageStyleSelector.value, 
      generatedText: entityDescriptionContainer.style.display !== 'none' ? entityDescriptionContainer.textContent : null,
      generatedImageUrl: entityImageContainer.style.display !== 'none' && entityImageContainer.querySelector('img') ? entityImageContainer.querySelector('img').src : null,
      habitatsSelected,
      habitatManual: entityHabitatManual.value || '',
    };

    entities.push(entity);
    saveEntities(entities);
    renderSavedEntities();
    alert('Entity saved!');

    entityNameInput.value = '';
    entityDescriptionInput.value = '';
    entityBehaviorsInput.value = '';
    entityBiologyInput.value = '';
    entityDiscoveryInput.value = '';
    entityAdditionalInput.value = '';
    entityDosDontsInput.value = '';
    entityDangerSelector.value = 'Safe (Passive, harmless)';
    entityDescriptionContainer.style.display = 'none';
    entityDescriptionContainer.textContent = '';
    entityImageContainer.style.display = 'none';
    entityImageContainer.innerHTML = '';
    entityRelationsContainer.innerHTML = ''; 
    currentLoadedEntityId = null; 
  });

  saveSubLevelBtn.addEventListener('click', () => {
      const subLevels = getSavedSubLevels();
      if (subLevels.length >= MAX_SUB_LEVELS) {
          alert(`You can only save up to ${MAX_SUB_LEVELS} sub-levels.`);
          return;
      }

      const parentLevelId = parentLevelSelector.value;
      if (!parentLevelId) {
          alert('Please select a parent level before saving the sub-level.');
          return;
      }

      const subLevel = {
          id: Date.now().toString(),
          parentId: parentLevelId,
          differences: sublevelDifferencesInput.value,
          resemblance: sublevelResemblanceInput.value,
          description: sublevelDescriptionInput.value,
          entities: sublevelEntitiesInput.value,
          resources: sublevelResourcesInput.value, 
          entrances: sublevelEntrancesInput.value, 
          exits: sublevelExitsInput.value,     
          sublevelNumber: sublevelNumberInput.value, 
          structures: sublevelStructuresInput.value, 
          imageStyle: sublevelImageStyleSelector.value, 
          generatedText: subLevelDescriptionContainer.style.display !== 'none' ? subLevelDescriptionContainer.textContent : null,
          generatedImageUrl: subLevelImageContainer.style.display !== 'none' && subLevelImageContainer.querySelector('img') ? subLevelImageContainer.querySelector('img').src : null,
      };

    subLevels.push(subLevel);
    saveSubLevels(subLevels);
    renderSavedSubLevels();
    alert('Sub-Level saved!');
  });

  expeditionsBtn.addEventListener('click', () => {
    expeditionModal.style.display = 'block';
    expeditionTypeSelect.value = ''; 
    populateExpeditionTargetDropdown(''); 
    expeditionReportContainer.style.display = 'none'; 
    expeditionReportContainer.innerHTML = ''; 
    document.getElementById('scientist').checked = true;
    document.getElementById('genderMale').checked = true; 
  });

  closeModalBtn.addEventListener('click', () => {
    expeditionModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === expeditionModal) {
      expeditionModal.style.display = 'none';
    }
  });

  expeditionTypeSelect.addEventListener('change', () => {
    const selectedType = expeditionTypeSelect.value;
    populateExpeditionTargetDropdown(selectedType);
  });

  const populateExpeditionTargetDropdown = (type) => {
    expeditionTargetSelect.innerHTML = '<option value="">Select Target</option>';
    expeditionTargetSelect.disabled = true;

    let items = [];
    if (type === 'level') {
      items = getSavedLevels();
    } else if (type === 'sublevel') {
      items = getSavedSubLevels();
    } else if (type === 'entity') {
      items = getSavedEntities();
    }

    if (items.length > 0) {
      expeditionTargetSelect.disabled = false;
      items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        if (type === 'level') {
          option.textContent = item.levelNumber || 'Untitled Level';
        }
        else if (type === 'sublevel') {
          const parentLevel = findLevelById(item.parentId);
          const parentName = parentLevel ? (parentLevel.levelNumber || 'Untitled Parent Level') : 'Unknown Parent';
          option.textContent = item.sublevelNumber ? `Sub-Level ${item.sublevelNumber}` : `Sub-Level of ${parentName} (ID: ${item.id.substring(item.id.length - 4)})`;
        } else if (type === 'entity') {
          option.textContent = item.entityName || (item.entityLook ? `Entity: ${item.entityLook.substring(0, 30)}...` : 'Untitled Entity');
        }
        expeditionTargetSelect.appendChild(option);
      });
    }
  };

  startExpeditionBtn.addEventListener('click', async () => {
    const expeditionType = expeditionTypeSelect.value;
    const expeditionTargetId = expeditionTargetSelect.value;
    const characterType = document.querySelector('input[name="expeditionCharacter"]:checked').value;
    const characterGender = document.querySelector('input[name="characterGender"]:checked').value; 

    if (!expeditionType || !expeditionTargetId) {
      alert('Please select an expedition type and a target.');
      return;
    }

    let targetDetails = null;
    let targetName = '';
    let targetCategory = ''; 

    if (expeditionType === 'level') {
        targetDetails = findLevelById(expeditionTargetId);
        targetName = targetDetails.levelNumber || 'an unknown level';
        targetCategory = 'level';
    } else if (expeditionType === 'sublevel') {
        targetDetails = findSubLevelById(expeditionTargetId);
        const parentLevel = findLevelById(targetDetails.parentId);
        targetName = targetDetails.sublevelNumber ? `Sub-Level ${targetDetails.sublevelNumber}` : `a sub-level of ${parentLevel ? parentLevel.levelNumber : 'an unknown parent level'} (ID: ${targetDetails.id.substring(targetDetails.id.length - 4)})`;
        targetCategory = 'sublevel';
    } else if (expeditionType === 'entity') {
        targetDetails = findEntityById(expeditionTargetId);
        targetName = targetDetails.entityName || 'an unknown entity';
        targetCategory = 'entity';
    }

    if (!targetDetails) {
        alert('Selected target details could not be found.');
        return;
    }

    let prompt = '';
    let reportTitle = '';
    const genderPronoun = characterGender === 'male' ? 'he' : (characterGender === 'female' ? 'she' : 'they'); 
    const genderPossessive = characterGender === 'male' ? 'his' : (characterGender === 'female' ? 'her' : 'their'); 

    if (characterType === 'Scientist') {
        if (targetCategory === 'level') {
            reportTitle = `Environmental Analysis Report: Expedition to Level ${targetDetails.levelNumber || 'Unknown'}`;
            prompt = `Write a formal, clinical environmental analysis report from a ${characterGender} scientist's perspective for an new expedition into Backrooms Level ${targetDetails.levelNumber || 'Unknown'}.
            **Report Subject:** Level ${targetDetails.levelNumber || 'Unknown'} (Class: ${targetDetails.levelClass || 'Unknown'}, Safety: ${targetDetails.safety || 'Unknown'}, Security: ${targetDetails.security || 'Unknown'}, Entity Count: ${targetDetails.entityCount || 'Unknown'})

            **Objective:** To systematically document the environmental characteristics, anomalies, potential hazards, and resources within the designated area.

            **Observations:**
            Describe the general environment and architecture based on its characteristics: "${targetDetails.characteristics || 'No specific characteristics.'}".
            Detail any observed phenomena: "${targetDetails.phenomena || 'No specific phenomena.'}".
            Catalog notable objects: "${targetDetails.objects || 'No notable objects.'}".

            **Structures:**
            Document any identified structures, such as buildings, bases, or geological formations: "${targetDetails.structures || 'No specific structures.'}".

            **Entity Analysis:**
            Assess the presence and behavior of entities: "${targetDetails.entities || 'No specific entities.'}".

            **Entry and Exit Points:**
            Document how the level is typically entered: "${targetDetails.entrances || 'Typical entrances.'}".
            Document how the level is typically exited: "${targetDetails.exits || 'Typical exits.'}".

            **Conclusion:** Summarize the findings regarding safety, navigability, and overall threat level of Level ${targetDetails.levelNumber || 'Unknown'}. State the final status of the expedition (e.g., "Expedition successful, data collected." or "Expedition terminated due to unforeseen hazards.").
            Maintain an objective, scientific tone, focusing on data and analysis. Provide a comprehensive and coherent report. Use ${genderPronoun} and ${genderPossessive} pronouns for the scientist.`;

        } else if (targetCategory === 'sublevel') {
            const parentLevel = findLevelById(targetDetails.parentId);
            const subLevelReportName = targetDetails.sublevelNumber ? `Sub-Level ${targetDetails.sublevelNumber}` : `Sub-Level of ${parentLevel ? parentLevel.levelNumber : 'Unknown Level'}`;
            reportTitle = `Environmental Analysis Report: Expedition to ${subLevelReportName}`;
            prompt = `Write a formal, clinical environmental analysis report from a ${characterGender} scientist's perspective for an new expedition into ${subLevelReportName}.
            **Report Subject:** ${subLevelReportName} (Differences: ${targetDetails.differences || 'N/A'}, Resemblance: ${targetDetails.resemblance || 'N/A'})

            **Objective:** To assess the unique characteristics of this sub-level in relation to its parent level, identify new threats or resources, and map its distinct environment.

            **Observations:**
            Describe the specific environment and atmosphere: "${targetDetails.description || 'An ambiguous environment.'}".
            Detail how it differs from the main level: "${targetDetails.differences || 'No specific differences.'}".
            Detail how it resembles the main level: "${targetDetails.resemblance || 'No specific resemblances.'}".

            **Entity Analysis:**
            Assess entities specific to this sub-level: "${targetDetails.entities || 'No specific entities mentioned for this sub-level.'}".

            **Resource Assessment:**
            Catalog notable resources or supplies: "${targetDetails.resources || 'No specific resources mentioned.'}".

            **Structures:**
            Document any identified structures specific to this sub-level: "${targetDetails.structures || 'No specific structures.'}".

            **Entry and Exit Points:**
            Document how to enter this sub-level: "${targetDetails.entrances || 'Typical sub-level entrances.'}".
            Document how to exit this sub-level: "${targetDetails.exits || 'Typical sub-level exits.'}".

            **Conclusion:** Summarize findings, emphasizing the sub-level's distinctness or integration with its parent. State the final status of the expedition.
            Maintain an objective, scientific tone, focusing on data and analysis. Provide a comprehensive and coherent report. Use ${genderPronoun} and ${genderPossessive} pronouns for the scientist.`;

        } else if (targetCategory === 'entity') {
            reportTitle = `Behavioral Study Report: Encounter with Entity "${targetDetails.entityName || 'Unknown Entity'}"`;
            prompt = `Write a formal, clinical behavioral study report from a ${characterGender} scientist's perspective detailing an new encounter with the Backrooms entity "${targetDetails.entityName || 'Unknown Entity'}".
            **Report Subject:** Entity "${targetDetails.entityName || 'Unknown Entity'}" (Danger Level: ${targetDetails.entityDanger || 'Unknown'})

            **Appearance Notes:** "${targetDetails.entityLook || 'An indistinct form.'}".

            **Observed Behavior:**
            Describe the entity's actions, movements, and reactions to its environment: "${targetDetails.entityOther || 'No specific other traits.'}".
            ${targetDetails.relations && targetDetails.relations.length > 0 ? `\n**Inter-Entity Relationships:**\n${targetDetails.relations.map(rel => {
                const linkedEntity = findEntityById(rel.targetId);
                return `- Observed relationship: This entity is ${rel.type.toLowerCase()} of "${linkedEntity ? linkedEntity.entityName : 'Unknown Entity'}" (Danger: ${linkedEntity ? linkedEntity.entityDanger : 'Unknown'}).`;
            }).join('\n')}\n` : ''}

            **Abilities Confirmation:**
            Detail any observed abilities or powers: "${targetDetails.entityPowers || 'Unknown abilities.'}".

            **Danger Reassessment:**
            Re-evaluate and justify the threat level based on direct observation.

            **Recommendations:**
            Provide recommendations for future encounters, containment, or study.

            **Outcome:** State the final status of the scientist's observation (e.g., "Observation complete, subject contained." or "Observation terminated, subject evaded.").
            Maintain an objective, scientific tone, focusing on data and analysis. Provide a comprehensive and coherent report. Use ${genderPronoun} and ${genderPossessive} pronouns for the scientist.`;
        }
    } else if (characterType === 'Wanderer') { 
        if (targetCategory === 'level') {
            reportTitle = `Survival Log: Expedition to Level ${targetDetails.levelNumber || 'Unknown'}`;
            prompt = `Write a raw, first-person survival log entry from a lone ${characterGender} wanderer exploring Backrooms Level ${targetDetails.levelNumber || 'Unknown'}.
            Focus on immediate sensory details, escalating fear, desperate navigation, and close encounters.
            The log should convey a sense of dread and disorientation.

            **Log Entries (Chronological Order):**
            Describe the initial entry: "${targetDetails.entrances || 'Typical entrances.'}".
            Recount experiences with the level's characteristics: "${targetDetails.characteristics || 'No specific characteristics.'}".
            Document any strange phenomena encountered: "${targetDetails.phenomena || 'No specific phenomena.'}".
            Mention any objects found, and their utility or lack thereof: "${targetDetails.objects || 'No notable objects.'}".
            Detail any notable structures or formations encountered: "${targetDetails.structures || 'No specific structures.'}".
            Detail encounters with entities: "${targetDetails.entities || 'No specific entities.'}".
            Describe the attempt to find an exit: "${targetDetails.exits || 'Typical exits.'}".

            **Final Entry:** Conclude with the wanderer's current state, fate (survival, loss, demise), and a brief, haunting reflection.
            The log should be fragmented and emotionally charged. Use "I", "my", "me", and "myself" to represent the wanderer, but make sure the narrative is consistent with the chosen gender (${characterGender}) if possible, though focus on internal experience rather than explicit gendered descriptions unless directly relevant.`;

        } else if (targetCategory === 'sublevel') {
            const parentLevel = findLevelById(targetDetails.parentId);
            const subLevelReportName = targetDetails.sublevelNumber ? `Sub-Level ${targetDetails.sublevelNumber}` : `Sub-Level of ${parentLevel ? parentLevel.levelNumber : 'Unknown Level'}`;
            reportTitle = `Survival Log: Expedition to ${subLevelReportName}`;
            prompt = `Write a raw, first-person survival log entry from a lone ${characterGender} wanderer exploring ${subLevelReportName}.
            Focus on how the sub-level felt different yet similar to the main level, immediate sensory details, escalating fear, desperate navigation, and close encounters.
            The log should convey a sense of dread and disorientation.

            **Log Entries (Chronological Order):**
            Describe the entry into the sub-level: "${targetDetails.entrances || 'Typical sub-level entrances.'}".
            Recount experiences within its specific environment and atmosphere: "${targetDetails.description || 'An ambiguous environment.'}".
            Document how it felt different from the main level: "${targetDetails.differences || 'No specific differences.'}".
            Document how it felt similar to the main level: "${targetDetails.resemblance || 'No specific resemblances.'}".
            Mention any resources found: "${targetDetails.resources || 'No specific resources mentioned.'}".
            Detail any notable structures or formations within this sub-level: "${targetDetails.structures || 'No specific structures.'}".
            Detail encounters with entities specific to this sub-level: "${targetDetails.entities || 'No specific entities mentioned for this sub-level.'}".
            Describe the attempt to find an exit: "${targetDetails.exits || 'Typical sub-level exits.'}".

            **Final Entry:** Conclude with the wanderer's current state, fate (survival, loss, demise), and a brief, haunting reflection.
            The log should be fragmented and emotionally charged. Use "I", "my", "me", and "myself" to represent the wanderer, but make sure the narrative is consistent with the chosen gender (${characterGender}) if possible, though focus on internal experience rather than explicit gendered descriptions unless directly relevant.`;

        } else if (targetCategory === 'entity') {
            reportTitle = `Direct Encounter Log: Confrontation with Entity "${targetDetails.entityName || 'Unknown Entity'}"`;
            prompt = `Write a raw, first-person log entry from a ${characterGender} wanderer who had a direct, terrifying confrontation with the Backrooms entity "${targetDetails.entityName || 'Unknown Entity'}".
            Focus on the immediate sensory details of the encounter, the overwhelming fear, evasion attempts, and the raw struggle for survival.

            **Encounter Details:**
            Describe the entity's appearance as experienced firsthand: "${targetDetails.entityLook || 'An indistinct form.'}".
            Recount its observed abilities/powers in action: "${targetDetails.entityPowers || 'Unknown abilities.'}".
            Detail its behavior during the confrontation: "${targetDetails.entityOther || 'No specific other traits.'}".
            ${targetDetails.relations && targetDetails.relations.length > 0 ? `\n**Perceived Relationships with Other Entities:**\n${targetDetails.relations.map(rel => {
                const linkedEntity = findEntityById(rel.targetId);
                return `- This entity seems to be ${rel.type.toLowerCase()} of "${linkedEntity ? linkedEntity.entityName : 'Unknown Entity'}" (Danger: ${linkedEntity ? linkedEntity.entityDanger : 'Unknown'}). My interaction might affect or be affected by this relationship.`;
            }).join('\n')}\n` : ''}
            Express the perceived danger level: "${targetDetails.entityDanger || 'Unknown Danger.'}".

            **Outcome:** Conclude with the wanderer's current state and ultimate fate.
            The log should be intense, desperate, and personal. Use "I", "my", "me", and "myself" to represent the wanderer, but make sure the narrative is consistent with the chosen gender (${characterGender}) if possible, though focus on internal experience rather than explicit gendered descriptions unless directly relevant.`;
        }
    }

    try {
      expeditionReportContainer.innerHTML = `<p>Sending ${characterGender} ${characterType} to ${targetName}... generating report...</p>`;
      expeditionReportContainer.style.display = 'block';

      const completion = await websim.chat.completions.create({
        messages: [
          { role: "user", content: prompt },
        ],
      });

      if (completion && completion.content) {
        const formattedContent = `<h3>${reportTitle}</h3><p>${completion.content.replace(/\n/g, '<br>')}</p>`;
        expeditionReportContainer.innerHTML = formattedContent;
      } else {
        expeditionReportContainer.textContent = 'Expedition report failed to generate. Please try again.';
      }
    } catch (error) {
      console.error("Expedition generation failed:", error);
      expeditionReportContainer.textContent = 'Error during expedition: ' + error.message;
    }
  });

  const getSelectedClass = () => {
    return levelClassSelector.value === 'Custom'
      ? (customClassNameInput.value || 'Custom')
      : levelClassSelector.value;
  };

  const getSelectedSafety = () => {
    const sel = document.querySelector('input[name="safety"]:checked')?.value || 'Safe';
    return sel === 'Custom' ? (customSafetyNameInput.value || 'Custom') : sel;
  };

  const getSelectedSecurity = () => {
    const sel = document.querySelector('input[name="security"]:checked')?.value || 'Secure';
    return sel === 'Custom' ? (customSecurityNameInput.value || 'Custom') : sel;
  };

  const getSelectedEntityCount = () => {
    return entityCountSelector.value === 'Custom'
      ? (customEntityCountInput.value || 'Custom')
      : entityCountSelector.value;
  };

  const toggleCustomClass = () => {
    customClassGroup.style.display = levelClassSelector.value === 'Custom' ? 'block' : 'none';
  };

  const toggleCustomSafety = () => {
    const sel = document.querySelector('input[name="safety"]:checked')?.value;
    customSafetyGroup.style.display = sel === 'Custom' ? 'block' : 'none';
  };

  const toggleCustomSecurity = () => {
    const sel = document.querySelector('input[name="security"]:checked')?.value;
    customSecurityGroup.style.display = sel === 'Custom' ? 'block' : 'none';
  };

  const toggleCustomEntityCount = () => {
    customEntityCountGroup.style.display = entityCountSelector.value === 'Custom' ? 'block' : 'none';
  };

  const toggleCustomWritingStyle = () => {
    customWritingStyleGroup.style.display = writingStyleSelector.value === 'Custom' ? 'block' : 'none';
  };

  const toggleSection = (btn, group) => {
    const active = btn.dataset.active === 'true';
    btn.dataset.active = (!active).toString();
    group.style.display = active ? 'none' : 'block';
  };

  survivalGuideToggle.dataset.active = 'false';
  foundFootagesToggle.dataset.active = 'false';
  foundNotesToggle.dataset.active = 'false';
  theoriesToggle.dataset.active = 'false';
  incidentReportsToggle.dataset.active = 'false';
  revisionsToggle.dataset.active = 'false';
  addendumToggle.dataset.active = 'false';
  explorerReportsToggle.dataset.active = 'false';
  testLogsToggle.dataset.active = 'false';
  interviewsToggle.dataset.active = 'false';
  discoveryToggle.dataset.active = 'false';
  archivedDocsToggle.dataset.active = 'false';
  audioTranscriptsToggle.dataset.active = 'false';
  timelineToggle.dataset.active = 'false';

  survivalGuideToggle.addEventListener('click', () => toggleSection(survivalGuideToggle, survivalGuideGroup));
  foundFootagesToggle.addEventListener('click', () => toggleSection(foundFootagesToggle, foundFootagesGroup));
  foundNotesToggle.addEventListener('click', () => toggleSection(foundNotesToggle, foundNotesGroup));
  theoriesToggle.addEventListener('click', () => toggleSection(theoriesToggle, theoriesGroup));
  incidentReportsToggle.addEventListener('click', () => toggleSection(incidentReportsToggle, incidentReportsGroup));
  revisionsToggle.addEventListener('click', () => toggleSection(revisionsToggle, revisionsGroup));
  addendumToggle.addEventListener('click', () => toggleSection(addendumToggle, addendumGroup));
  explorerReportsToggle.addEventListener('click', () => toggleSection(explorerReportsToggle, explorerReportsGroup));
  testLogsToggle.addEventListener('click', () => toggleSection(testLogsToggle, testLogsGroup));
  interviewsToggle.addEventListener('click', () => toggleSection(interviewsToggle, interviewsGroup));
  discoveryToggle.addEventListener('click', () => toggleSection(discoveryToggle, discoveryGroup));
  archivedDocsToggle.addEventListener('click', () => toggleSection(archivedDocsToggle, archivedDocsGroup));
  audioTranscriptsToggle.addEventListener('click', () => toggleSection(audioTranscriptsToggle, audioTranscriptsGroup));
  timelineToggle.addEventListener('click', () => toggleSection(timelineToggle, timelineGroup));

  levelClassSelector.addEventListener('change', toggleCustomClass);
  document.querySelectorAll('input[name="safety"]').forEach(r=>r.addEventListener('change', toggleCustomSafety));
  document.querySelectorAll('input[name="security"]').forEach(r=>r.addEventListener('change', toggleCustomSecurity));
  entityCountSelector.addEventListener('change', toggleCustomEntityCount);
  writingStyleSelector.addEventListener('change', toggleCustomWritingStyle);

  entityHabitatsSelect.addEventListener('change', () => {
    const vals = Array.from(entityHabitatsSelect.selectedOptions).map(o=>o.value);
    entityHabitatManualGroup.style.display = vals.includes('manual') ? 'block' : 'none';
  });

  entityToggleBtn.addEventListener('click', () => {
    entityCard.classList.toggle('collapsed');
    entityToggleBtn.textContent = entityCard.classList.contains('collapsed') ? 'Expand' : 'Minimize';
    // Ensure manual habitat box never shows when minimized
    if (entityCard.classList.contains('collapsed')) {
      entityHabitatManualGroup.style.display = 'none';
    } else {
      const vals = Array.from(entityHabitatsSelect.selectedOptions).map(o=>o.value);
      entityHabitatManualGroup.style.display = vals.includes('manual') ? 'block' : 'none';
    }
  });

  sublevelToggleBtn.addEventListener('click', () => {
    sublevelCard.classList.toggle('collapsed');
    sublevelToggleBtn.textContent = sublevelCard.classList.contains('collapsed') ? 'Expand' : 'Minimize';
  });

  renderSavedLevels();
  renderSavedEntities();
  renderSavedSubLevels(); 
  populateParentLevelDropdown(); 
  populateHabitatOptions();
  toggleCustomSafety(); toggleCustomSecurity(); toggleCustomEntityCount();
  toggleCustomWritingStyle();

  // Ambient audio: loop distant song, play footsteps every 3–4 minutes after first interaction
  let bgAudio, stepAudio, stepTimer;
  function startAudio() {
    if (bgAudio) return;
    bgAudio = new Audio('/distant-song[1].mp3'); bgAudio.loop = true; bgAudio.volume = 0.35;
    stepAudio = new Audio('/loud-walking-on-carpet-99860.mp3'); stepAudio.volume = 0.05;
    const schedule = () => { const ms = (Math.random() < 0.5 ? 180000 : 240000); stepTimer = setTimeout(() => { stepAudio.currentTime = 0; stepAudio.play().catch(()=>{}); schedule(); }, ms); };
    bgAudio.play().catch(()=>{}); schedule();
  }
  ['click','keydown','touchstart'].forEach(e => document.addEventListener(e, startAudio, { once: true, capture: true }));

  // Helpers for export/import
  function downloadJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click();
    a.remove(); URL.revokeObjectURL(url);
  }
  function downloadTXT(filename, text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click();
    a.remove(); URL.revokeObjectURL(url);
  }
  async function readFileText(file) { return await file.text(); }

  // Build readable TXT summaries
  function summarizeLevels(levels) {
    return levels.map(l => `Level ${l.levelNumber||'Untitled'} | Class: ${l.levelClass||'Unknown'} | Safety: ${l.safety} | Security: ${l.security}`).join('\n');
  }
  function summarizeEntities(entities) {
    return entities.map(e => `Entity ${e.entityName||'Untitled'} | Danger: ${e.entityDanger} | Behaviors: ${(e.entityBehaviors||'').slice(0,60)}`).join('\n');
  }
  function summarizeSubLevels(subs) {
    return subs.map(s => `Sub-Level ${s.sublevelNumber||s.id.slice(-4)} | Parent: ${s.parentId} | Diff: ${(s.differences||'').slice(0,60)}`).join('\n');
  }
  // Parse imported text (expects JSON array or NDJSON)
  function parseImported(text) {
    try { const j = JSON.parse(text); return Array.isArray(j) ? j : []; } catch {}
    const lines = text.split('\n').map(x=>x.trim()).filter(Boolean); const out=[];
    for (const line of lines) { try { out.push(JSON.parse(line)); } catch {} }
    return out;
  }

  // Wire up buttons
  const exportLevelsJsonBtn = document.getElementById('exportLevelsJsonBtn');
  const exportLevelsTxtBtn = document.getElementById('exportLevelsTxtBtn');
  const importLevelsBtn = document.getElementById('importLevelsBtn');
  const importLevelsFile = document.getElementById('importLevelsFile');

  const exportEntitiesJsonBtn = document.getElementById('exportEntitiesJsonBtn');
  const exportEntitiesTxtBtn = document.getElementById('exportEntitiesTxtBtn');
  const importEntitiesBtn = document.getElementById('importEntitiesBtn');
  const importEntitiesFile = document.getElementById('importEntitiesFile');

  const exportSubLevelsJsonBtn = document.getElementById('exportSubLevelsJsonBtn');
  const exportSubLevelsTxtBtn = document.getElementById('exportSubLevelsTxtBtn');
  const importSubLevelsBtn = document.getElementById('importSubLevelsBtn');
  const importSubLevelsFile = document.getElementById('importSubLevelsFile');

  // Export handlers
  exportLevelsJsonBtn.addEventListener('click', () => downloadJSON('backrooms-levels.json', getSavedLevels()));
  exportLevelsTxtBtn.addEventListener('click', () => downloadTXT('backrooms-levels.txt', summarizeLevels(getSavedLevels())));
  exportEntitiesJsonBtn.addEventListener('click', () => downloadJSON('backrooms-entities.json', getSavedEntities()));
  exportEntitiesTxtBtn.addEventListener('click', () => downloadTXT('backrooms-entities.txt', summarizeEntities(getSavedEntities())));
  exportSubLevelsJsonBtn.addEventListener('click', () => downloadJSON('backrooms-sublevels.json', getSavedSubLevels()));
  exportSubLevelsTxtBtn.addEventListener('click', () => downloadTXT('backrooms-sublevels.txt', summarizeSubLevels(getSavedSubLevels())));

  // Import triggers
  importLevelsBtn.addEventListener('click', () => importLevelsFile.click());
  importEntitiesBtn.addEventListener('click', () => importEntitiesFile.click());
  importSubLevelsBtn.addEventListener('click', () => importSubLevelsFile.click());

  // Import readers
  importLevelsFile.addEventListener('change', async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const text = await readFileText(file); const items = parseImported(text);
    if (!items.length) return alert('Import failed: expected JSON array or NDJSON.');
    const existing = getSavedLevels(); const ids = new Set(existing.map(i=>i.id));
    items.forEach((it, idx) => { if (!it.id || ids.has(it.id)) it.id = `${Date.now()}-${idx}`; });
    saveLevels(existing.concat(items)); renderSavedLevels(); alert(`Imported ${items.length} level(s).`);
    e.target.value = '';
  });

  importEntitiesFile.addEventListener('change', async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const text = await readFileText(file); const items = parseImported(text);
    if (!items.length) return alert('Import failed: expected JSON array or NDJSON.');
    const existing = getSavedEntities(); const ids = new Set(existing.map(i=>i.id));
    items.forEach((it, idx) => { if (!it.id || ids.has(it.id)) it.id = `${Date.now()}-${idx}`; });
    saveEntities(existing.concat(items)); renderSavedEntities(); alert(`Imported ${items.length} entity(s).`);
    e.target.value = '';
  });

  importSubLevelsFile.addEventListener('change', async (e) => {
    const file = e.target.files[0]; if (!file) return;
    const text = await readFileText(file); const items = parseImported(text);
    if (!items.length) return alert('Import failed: expected JSON array or NDJSON.');
    const existing = getSavedSubLevels(); const ids = new Set(existing.map(i=>i.id));
    items.forEach((it, idx) => { if (!it.id || ids.has(it.id)) it.id = `${Date.now()}-${idx}`; });
    saveSubLevels(existing.concat(items)); renderSavedSubLevels(); alert(`Imported ${items.length} sub-level(s).`);
    e.target.value = '';
  });
});