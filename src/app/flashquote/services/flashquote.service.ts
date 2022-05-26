import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FlashFormDTO } from '../models/Flashquote';

@Injectable({
  providedIn: 'root',
})
export class FlashquoteService {
  data = {
    marketId: 0,
    questions: [
      {
        id: 60,
        title: {
          LabelFr: 'Nom du proposant',
          LabelEn: 'Applicant name',
        },
        type: 'TEXT',
        isRequired: true,
        responses: [],
        identifier: 'Applicant-FullName',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 62,
        title: {
          LabelFr: "Nom de la compagnie (s'il y a lieu)",
          LabelEn: 'Company name (if applicable)',
        },
        type: 'TEXT',
        isRequired: false,
        responses: [],
        identifier: 'CompanyName',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 1532,
        title: {
          LabelFr: 'Adresse courriel',
          LabelEn: 'Email address',
        },
        type: 'TEXT',
        isRequired: true,
        responses: [],
        identifier: 'EmailAddress',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 1533,
        title: {
          LabelFr: 'Numéro de téléphone',
          LabelEn: 'Phone number',
        },
        type: 'NUMBER',
        isRequired: true,
        responses: [],
        identifier: 'PhoneNumber',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 2879,
        title: {
          LabelFr: 'Quelles sont les activités du proposant?',
          LabelEn: 'What are the applicant busines activities?',
        },
        type: 'MULTIPLE',
        isRequired: true,
        responses: [
          {
            id: 12569,
            responseKey: '922',
            label: {
              LabelFr:
                'Menuiserie hors atelier : armoire de cuisine, escalier, balcon et autres produits préfabriqués en bois  (1752a)',
              LabelEn:
                'Carpentry outside workshop: kitchen cabinet, staircase, balcony and other prefabricated wooden products (1752a)',
            },
            showOrder: 0,
          },
          {
            id: 12570,
            responseKey: '95',
            label: {
              LabelFr:
                'Électricien : secteurs commercial, industriel, institutionnel (1736)',
              LabelEn:
                'Electrician: commercial, industrial, institutional sectors (1736)',
            },
            showOrder: 0,
          },
          {
            id: 12571,
            responseKey: '53',
            label: {
              LabelFr:
                'Clôture : installation et réparation - excluant fabrication (1522)',
              LabelEn:
                'Fence: installation and repair - excluding manufacturing (1522)',
            },
            showOrder: 0,
          },
          {
            id: 12572,
            responseKey: '603',
            label: {
              LabelFr:
                "Fumigation, désinsectisation, dératisation à l'intérieur des bâtiments ou bateaux (7391)",
              LabelEn:
                'Fumigation, exterminating operations inside buildings or vessels (7391)',
            },
            showOrder: 0,
          },
          {
            id: 12573,
            responseKey: '607',
            label: {
              LabelFr:
                'Nettoyage de meubles, tentures, moquettes chez les clients (7395)',
              LabelEn:
                "Furniture, drapery, dug cleaning on customer's premises (7395)",
            },
            showOrder: 0,
          },
          {
            id: 12574,
            responseKey: '21',
            label: {
              LabelFr: 'Aménagement paysager : jardinier et paysagiste (735)',
              LabelEn: 'Landscaping: gardener and landscaper (735)',
            },
            showOrder: 0,
          },
          {
            id: 12576,
            responseKey: '106',
            label: {
              LabelFr: 'Recouvrement de sol : bois, tapis, vinyle (1756)',
              LabelEn: 'Floor covering: wood, carpet, vinyl (1756)',
            },
            showOrder: 0,
          },
          {
            id: 12577,
            responseKey: '107',
            label: {
              LabelFr: "Décorateur d'intérieur (1757)",
              LabelEn: 'Interior decorator (1757)',
            },
            showOrder: 0,
          },
          {
            id: 12578,
            responseKey: '606',
            label: {
              LabelFr: 'Concierge (7394)',
              LabelEn: 'Janitorial service (7394)',
            },
            showOrder: 0,
          },
          {
            id: 12579,
            responseKey: '91',
            label: {
              LabelFr:
                'Électricien : secteurs résidentiel et commercial (1731)',
              LabelEn: 'Electrician: residential and commercial sectors (1731)',
            },
            showOrder: 0,
          },
          {
            id: 12580,
            responseKey: '98',
            label: {
              LabelFr:
                'Maçonnerie : brique, pierre, carrelage, marbre, mosaïque, stuc (1743)',
              LabelEn:
                'Masonry: bricklaying, stonework, tile, marble, mosaic, stuccoing (1743)',
            },
            showOrder: 0,
          },
          {
            id: 12581,
            responseKey: '113',
            label: {
              LabelFr:
                'Installation de porte, porte de garage, fenêtre, auvent métallique (1766)',
              LabelEn:
                'Installation of door, garage door, window, metal awning (1766)',
            },
            showOrder: 0,
          },
          {
            id: 12582,
            responseKey: '104',
            label: {
              LabelFr:
                'Peinture et décoration - sans emploi de pistolets (1754)',
              LabelEn: 'Painting and decorating - excluding spray paint (1754)',
            },
            showOrder: 0,
          },
          {
            id: 12583,
            responseKey: '105',
            label: {
              LabelFr:
                'Peinture et décoration - avec emploi de pistolets (1755)',
              LabelEn: 'Painting and decorating - including spray paint (1755)',
            },
            showOrder: 0,
          },
          {
            id: 12584,
            responseKey: '99',
            label: {
              LabelFr:
                'Système d’intérieur, pose de gypse, cloison sèche, plâtrage et lattage (1744)',
              LabelEn:
                'Interior system, gypsum installation, drywall, plastering and battening (1744)',
            },
            showOrder: 0,
          },
          {
            id: 12586,
            responseKey: '61',
            label: {
              LabelFr: 'Enseignes - sans circuits électriques (1532)',
              LabelEn: 'Signs - without electrical circuits (1532)',
            },
            showOrder: 0,
          },
          {
            id: 12587,
            responseKey: '63',
            label: {
              LabelFr: 'Antennes de télévision (1534)',
              LabelEn: 'Television antennae (1534)',
            },
            showOrder: 0,
          },
          {
            id: 12588,
            responseKey: '100',
            label: {
              LabelFr:
                'Pose de carrelage, céramique, mosaïque - excluant maçonnerie, égout, évacuation, plafond, terrazzo (1745)',
              LabelEn:
                'Tilework - excluding masonry, sewers, drains, ceiling, terrazzo (1745)',
            },
            showOrder: 0,
          },
          {
            id: 12589,
            responseKey: '22',
            label: {
              LabelFr: 'Arbres : enlèvement, taille, élagage (736)',
              LabelEn: 'Tree removal, trimming, pruning (736)',
            },
            showOrder: 0,
          },
          {
            id: 12590,
            responseKey: '923',
            label: {
              LabelFr:
                'Enseignes - avec circuits électriques - excluant la fabrication (1532a)',
              LabelEn:
                'Signs - with electrical circuits - excluding manufacturing (1532a)',
            },
            showOrder: 0,
          },
          {
            id: 12591,
            responseKey: '921',
            label: {
              LabelFr:
                'Installation (a) de recouvrement extérieur de bâtiment : vinyle, aluminium, acier - sauf maçonnerie (1743a)',
              LabelEn:
                'Installation (a) of exterior building covering: vinyl, aluminum, steel  - except masonry (1743a)',
            },
            showOrder: 0,
          },
          {
            id: 12592,
            responseKey: '920',
            label: {
              LabelFr: 'Installation (b) de gouttière (1743b)',
              LabelEn: 'Installation (b) of gutter (1743b)',
            },
            showOrder: 0,
          },
          {
            id: 12593,
            responseKey: '919',
            label: {
              LabelFr:
                'Installation (c) de scellant pour portes et fenêtres (1743c)',
              LabelEn:
                'Installation (c) of sealer for doors and windows (1743c)',
            },
            showOrder: 0,
          },
          {
            id: 12594,
            responseKey: '102',
            label: {
              LabelFr:
                'Charpenterie hors atelier : structure de bâtiment en bois (1752)',
              LabelEn:
                'Carpentry outside workshop: wooden building structure (1752)',
            },
            showOrder: 0,
          },
          {
            id: 12596,
            responseKey: '48',
            label: {
              LabelFr: 'Démolition (mur porteur ou bâtiment complet) (1512)',
              LabelEn:
                'Demolition (load-bearing wall or complete building) (1512)',
            },
            showOrder: 0,
          },
          {
            id: 12597,
            responseKey: '50',
            label: {
              LabelFr:
                'Soutènement/étaiement, reprise en sous-oeuvre, travaux en caisson, battage de pieux (1514)',
              LabelEn:
                'Support work, underpinning operations, caisson work, pile driving (1514)',
            },
            showOrder: 0,
          },
          {
            id: 12598,
            responseKey: '51',
            label: {
              LabelFr: "Utilisation d'explosifs (1515)",
              LabelEn: 'Blasting Contractors (1515)',
            },
            showOrder: 0,
          },
          {
            id: 12599,
            responseKey: '56',
            label: {
              LabelFr: 'Déneigement (1525)',
              LabelEn: 'Snow Removal, Clearing, Ploughing (1525)',
            },
            showOrder: 0,
          },
          {
            id: 12600,
            responseKey: '62',
            label: {
              LabelFr: 'Enlèvement/installation de reservoir (1533)',
              LabelEn: 'Removal or installation of tank (1533)',
            },
            showOrder: 0,
          },
          {
            id: 12601,
            responseKey: '72',
            label: {
              LabelFr: 'Routes, rues y compris revêtement ou décapage (1631)',
              LabelEn:
                'Highway, Street, Road including Paving, Resurfacing (1631)',
            },
            showOrder: 0,
          },
          {
            id: 12602,
            responseKey: '80',
            label: {
              LabelFr: 'Plomberie, y compris spa (1711)',
              LabelEn: 'Plumbing, Including Hot Tubs (1711)',
            },
            showOrder: 0,
          },
          {
            id: 12603,
            responseKey: '83',
            label: {
              LabelFr: 'Extincteur automatique de bâtiment - (gicleurs) (1714)',
              LabelEn: 'Automatic Sprinklers (1714)',
            },
            showOrder: 0,
          },
          {
            id: 12604,
            responseKey: '84',
            label: {
              LabelFr: 'Ventilation/Climatisation/Chauffage (HVAC) (1715)',
              LabelEn: 'Heating/Ventilation/Air-Conditioning (HVAC) (1715)',
            },
            showOrder: 0,
          },
          {
            id: 12605,
            responseKey: '96',
            label: {
              LabelFr: 'Fondation (1741)',
              LabelEn: 'Foundation (1741)',
            },
            showOrder: 0,
          },
          {
            id: 12606,
            responseKey: '109',
            label: {
              LabelFr: 'Recouvrement extérieur de bâtiment (1762)',
              LabelEn: 'Sheet Metal - Away from Shop (1762)',
            },
            showOrder: 0,
          },
          {
            id: 12607,
            responseKey: '118',
            label: {
              LabelFr: 'Excavation (1774)',
              LabelEn: 'Excavation (1774)',
            },
            showOrder: 0,
          },
          {
            id: 12608,
            responseKey: '119',
            label: {
              LabelFr: 'Toitures (bardeaux) (1775)',
              LabelEn: 'Roofing - Residential (Shingle) (1775)',
            },
            showOrder: 0,
          },
          {
            id: 12609,
            responseKey: '120',
            label: {
              LabelFr: 'Toitures (à chaud) (1776)',
              LabelEn: 'Roofing - Other (Hot Tar, etc.) (1776)',
            },
            showOrder: 0,
          },
          {
            id: 12610,
            responseKey: '121',
            label: {
              LabelFr: "Travaux d'étanchéité (1777)",
              LabelEn: 'Waterproofing Operations (1777)',
            },
            showOrder: 0,
          },
          {
            id: 12611,
            responseKey: '126',
            label: {
              LabelFr:
                'Amiante, plomb, réduction UFI, atténuation des impacts du radon, décontamination des réservoirs (1782)',
              LabelEn:
                'Asbestos, Lead, UFI Abatement, Radon Mitigation, Tank Remediation (1782)',
            },
            showOrder: 0,
          },
          {
            id: 12612,
            responseKey: '608',
            label: {
              LabelFr:
                "Systèmes d'alarme - Installation (mais non la réparation du matériel à éteindre les incendies) (7396)",
              LabelEn:
                'Alarm System - Installation (excluding repair of fire suppression equipment)(7396)',
            },
            showOrder: 0,
          },
          {
            id: 12614,
            responseKey: '47',
            label: {
              LabelFr:
                'Travaux de soutènement ou déplacement de bâtiment (1511)',
              LabelEn: 'Support work or relocation of buildings (1511)',
            },
            showOrder: 0,
          },
          {
            id: 12732,
            responseKey: '927',
            label: {
              LabelFr: 'Vitrerie (1535)',
              LabelEn: 'Glazier Work (1535)',
            },
            showOrder: 0,
          },
          {
            id: 12736,
            responseKey: '133',
            label: {
              LabelFr:
                'Piscines hors terre - incluant accessoires, installation, réparation, ouverture et fermeture (1831)',
              LabelEn:
                'Pools: above ground - including accessories, installation, repair, opening and closing (1831)',
            },
            showOrder: 0,
          },
        ],
        identifier: 'Code',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 2885,
        title: {
          LabelFr: 'Pourcentage des travaux effectués pour chaque activités',
          LabelEn: 'Percentage of work done for each activities',
        },
        type: 'REPARTITION',
        isRequired: true,
        questionLinkId: 2879,
        responses: [
          {
            id: 12569,
            responseKey: '922',
            label: {
              LabelFr:
                'Menuiserie hors atelier : armoire de cuisine, escalier, balcon et autres produits préfabriqués en bois  (1752a)',
              LabelEn:
                'Carpentry outside workshop: kitchen cabinet, staircase, balcony and other prefabricated wooden products (1752a)',
            },
            showOrder: 0,
          },
          {
            id: 12570,
            responseKey: '95',
            label: {
              LabelFr:
                'Électricien : secteurs commercial, industriel, institutionnel (1736)',
              LabelEn:
                'Electrician: commercial, industrial, institutional sectors (1736)',
            },
            showOrder: 0,
          },
          {
            id: 12571,
            responseKey: '53',
            label: {
              LabelFr:
                'Clôture : installation et réparation - excluant fabrication (1522)',
              LabelEn:
                'Fence: installation and repair - excluding manufacturing (1522)',
            },
            showOrder: 0,
          },
          {
            id: 12572,
            responseKey: '603',
            label: {
              LabelFr:
                "Fumigation, désinsectisation, dératisation à l'intérieur des bâtiments ou bateaux (7391)",
              LabelEn:
                'Fumigation, exterminating operations inside buildings or vessels (7391)',
            },
            showOrder: 0,
          },
          {
            id: 12573,
            responseKey: '607',
            label: {
              LabelFr:
                'Nettoyage de meubles, tentures, moquettes chez les clients (7395)',
              LabelEn:
                "Furniture, drapery, dug cleaning on customer's premises (7395)",
            },
            showOrder: 0,
          },
          {
            id: 12574,
            responseKey: '21',
            label: {
              LabelFr: 'Aménagement paysager : jardinier et paysagiste (735)',
              LabelEn: 'Landscaping: gardener and landscaper (735)',
            },
            showOrder: 0,
          },
          {
            id: 12576,
            responseKey: '106',
            label: {
              LabelFr: 'Recouvrement de sol : bois, tapis, vinyle (1756)',
              LabelEn: 'Floor covering: wood, carpet, vinyl (1756)',
            },
            showOrder: 0,
          },
          {
            id: 12577,
            responseKey: '107',
            label: {
              LabelFr: "Décorateur d'intérieur (1757)",
              LabelEn: 'Interior decorator (1757)',
            },
            showOrder: 0,
          },
          {
            id: 12578,
            responseKey: '606',
            label: {
              LabelFr: 'Concierge (7394)',
              LabelEn: 'Janitorial service (7394)',
            },
            showOrder: 0,
          },
          {
            id: 12579,
            responseKey: '91',
            label: {
              LabelFr:
                'Électricien : secteurs résidentiel et commercial (1731)',
              LabelEn: 'Electrician: residential and commercial sectors (1731)',
            },
            showOrder: 0,
          },
          {
            id: 12580,
            responseKey: '98',
            label: {
              LabelFr:
                'Maçonnerie : brique, pierre, carrelage, marbre, mosaïque, stuc (1743)',
              LabelEn:
                'Masonry: bricklaying, stonework, tile, marble, mosaic, stuccoing (1743)',
            },
            showOrder: 0,
          },
          {
            id: 12581,
            responseKey: '113',
            label: {
              LabelFr:
                'Installation de porte, porte de garage, fenêtre, auvent métallique (1766)',
              LabelEn:
                'Installation of door, garage door, window, metal awning (1766)',
            },
            showOrder: 0,
          },
          {
            id: 12582,
            responseKey: '104',
            label: {
              LabelFr:
                'Peinture et décoration - sans emploi de pistolets (1754)',
              LabelEn: 'Painting and decorating - excluding spray paint (1754)',
            },
            showOrder: 0,
          },
          {
            id: 12583,
            responseKey: '105',
            label: {
              LabelFr:
                'Peinture et décoration - avec emploi de pistolets (1755)',
              LabelEn: 'Painting and decorating - including spray paint (1755)',
            },
            showOrder: 0,
          },
          {
            id: 12584,
            responseKey: '99',
            label: {
              LabelFr:
                'Système d’intérieur, pose de gypse, cloison sèche, plâtrage et lattage (1744)',
              LabelEn:
                'Interior system, gypsum installation, drywall, plastering and battening (1744)',
            },
            showOrder: 0,
          },
          {
            id: 12586,
            responseKey: '61',
            label: {
              LabelFr: 'Enseignes - sans circuits électriques (1532)',
              LabelEn: 'Signs - without electrical circuits (1532)',
            },
            showOrder: 0,
          },
          {
            id: 12587,
            responseKey: '63',
            label: {
              LabelFr: 'Antennes de télévision (1534)',
              LabelEn: 'Television antennae (1534)',
            },
            showOrder: 0,
          },
          {
            id: 12588,
            responseKey: '100',
            label: {
              LabelFr:
                'Pose de carrelage, céramique, mosaïque - excluant maçonnerie, égout, évacuation, plafond, terrazzo (1745)',
              LabelEn:
                'Tilework - excluding masonry, sewers, drains, ceiling, terrazzo (1745)',
            },
            showOrder: 0,
          },
          {
            id: 12589,
            responseKey: '22',
            label: {
              LabelFr: 'Arbres : enlèvement, taille, élagage (736)',
              LabelEn: 'Tree removal, trimming, pruning (736)',
            },
            showOrder: 0,
          },
          {
            id: 12590,
            responseKey: '923',
            label: {
              LabelFr:
                'Enseignes - avec circuits électriques - excluant la fabrication (1532a)',
              LabelEn:
                'Signs - with electrical circuits - excluding manufacturing (1532a)',
            },
            showOrder: 0,
          },
          {
            id: 12591,
            responseKey: '921',
            label: {
              LabelFr:
                'Installation (a) de recouvrement extérieur de bâtiment : vinyle, aluminium, acier - sauf maçonnerie (1743a)',
              LabelEn:
                'Installation (a) of exterior building covering: vinyl, aluminum, steel  - except masonry (1743a)',
            },
            showOrder: 0,
          },
          {
            id: 12592,
            responseKey: '920',
            label: {
              LabelFr: 'Installation (b) de gouttière (1743b)',
              LabelEn: 'Installation (b) of gutter (1743b)',
            },
            showOrder: 0,
          },
          {
            id: 12593,
            responseKey: '919',
            label: {
              LabelFr:
                'Installation (c) de scellant pour portes et fenêtres (1743c)',
              LabelEn:
                'Installation (c) of sealer for doors and windows (1743c)',
            },
            showOrder: 0,
          },
          {
            id: 12594,
            responseKey: '102',
            label: {
              LabelFr:
                'Charpenterie hors atelier : structure de bâtiment en bois (1752)',
              LabelEn:
                'Carpentry outside workshop: wooden building structure (1752)',
            },
            showOrder: 0,
          },
          {
            id: 12596,
            responseKey: '48',
            label: {
              LabelFr: 'Démolition (mur porteur ou bâtiment complet) (1512)',
              LabelEn:
                'Demolition (load-bearing wall or complete building) (1512)',
            },
            showOrder: 0,
          },
          {
            id: 12597,
            responseKey: '50',
            label: {
              LabelFr:
                'Soutènement/étaiement, reprise en sous-oeuvre, travaux en caisson, battage de pieux (1514)',
              LabelEn:
                'Support work, underpinning operations, caisson work, pile driving (1514)',
            },
            showOrder: 0,
          },
          {
            id: 12598,
            responseKey: '51',
            label: {
              LabelFr: "Utilisation d'explosifs (1515)",
              LabelEn: 'Blasting Contractors (1515)',
            },
            showOrder: 0,
          },
          {
            id: 12599,
            responseKey: '56',
            label: {
              LabelFr: 'Déneigement (1525)',
              LabelEn: 'Snow Removal, Clearing, Ploughing (1525)',
            },
            showOrder: 0,
          },
          {
            id: 12600,
            responseKey: '62',
            label: {
              LabelFr: 'Enlèvement/installation de reservoir (1533)',
              LabelEn: 'Removal or installation of tank (1533)',
            },
            showOrder: 0,
          },
          {
            id: 12601,
            responseKey: '72',
            label: {
              LabelFr: 'Routes, rues y compris revêtement ou décapage (1631)',
              LabelEn:
                'Highway, Street, Road including Paving, Resurfacing (1631)',
            },
            showOrder: 0,
          },
          {
            id: 12602,
            responseKey: '80',
            label: {
              LabelFr: 'Plomberie, y compris spa (1711)',
              LabelEn: 'Plumbing, Including Hot Tubs (1711)',
            },
            showOrder: 0,
          },
          {
            id: 12603,
            responseKey: '83',
            label: {
              LabelFr: 'Extincteur automatique de bâtiment - (gicleurs) (1714)',
              LabelEn: 'Automatic Sprinklers (1714)',
            },
            showOrder: 0,
          },
          {
            id: 12604,
            responseKey: '84',
            label: {
              LabelFr: 'Ventilation/Climatisation/Chauffage (HVAC) (1715)',
              LabelEn: 'Heating/Ventilation/Air-Conditioning (HVAC) (1715)',
            },
            showOrder: 0,
          },
          {
            id: 12605,
            responseKey: '96',
            label: {
              LabelFr: 'Fondation (1741)',
              LabelEn: 'Foundation (1741)',
            },
            showOrder: 0,
          },
          {
            id: 12606,
            responseKey: '109',
            label: {
              LabelFr: 'Recouvrement extérieur de bâtiment (1762)',
              LabelEn: 'Sheet Metal - Away from Shop (1762)',
            },
            showOrder: 0,
          },
          {
            id: 12607,
            responseKey: '118',
            label: {
              LabelFr: 'Excavation (1774)',
              LabelEn: 'Excavation (1774)',
            },
            showOrder: 0,
          },
          {
            id: 12608,
            responseKey: '119',
            label: {
              LabelFr: 'Toitures (bardeaux) (1775)',
              LabelEn: 'Roofing - Residential (Shingle) (1775)',
            },
            showOrder: 0,
          },
          {
            id: 12609,
            responseKey: '120',
            label: {
              LabelFr: 'Toitures (à chaud) (1776)',
              LabelEn: 'Roofing - Other (Hot Tar, etc.) (1776)',
            },
            showOrder: 0,
          },
          {
            id: 12610,
            responseKey: '121',
            label: {
              LabelFr: "Travaux d'étanchéité (1777)",
              LabelEn: 'Waterproofing Operations (1777)',
            },
            showOrder: 0,
          },
          {
            id: 12611,
            responseKey: '126',
            label: {
              LabelFr:
                'Amiante, plomb, réduction UFI, atténuation des impacts du radon, décontamination des réservoirs (1782)',
              LabelEn:
                'Asbestos, Lead, UFI Abatement, Radon Mitigation, Tank Remediation (1782)',
            },
            showOrder: 0,
          },
          {
            id: 12612,
            responseKey: '608',
            label: {
              LabelFr:
                "Systèmes d'alarme - Installation (mais non la réparation du matériel à éteindre les incendies) (7396)",
              LabelEn:
                'Alarm System - Installation (excluding repair of fire suppression equipment)(7396)',
            },
            showOrder: 0,
          },
          {
            id: 12614,
            responseKey: '47',
            label: {
              LabelFr:
                'Travaux de soutènement ou déplacement de bâtiment (1511)',
              LabelEn: 'Support work or relocation of buildings (1511)',
            },
            showOrder: 0,
          },
          {
            id: 12732,
            responseKey: '927',
            label: {
              LabelFr: 'Vitrerie (1535)',
              LabelEn: 'Glazier Work (1535)',
            },
            showOrder: 0,
          },
          {
            id: 12736,
            responseKey: '133',
            label: {
              LabelFr:
                'Piscines hors terre - incluant accessoires, installation, réparation, ouverture et fermeture (1831)',
              LabelEn:
                'Pools: above ground - including accessories, installation, repair, opening and closing (1831)',
            },
            showOrder: 0,
          },
        ],
        identifier: '',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 2880,
        title: {
          LabelFr: 'Limite de responsabilité civile',
          LabelEn: 'Liability Limit',
        },
        type: 'SELECT',
        isRequired: true,
        responses: [
          {
            id: 131,
            responseKey: '1000000',
            label: {
              LabelFr: '1 million',
              LabelEn: '1 million',
            },
            showOrder: 0,
          },
          {
            id: 132,
            responseKey: '2000000',
            label: {
              LabelFr: '2 millions',
              LabelEn: '2 million',
            },
            showOrder: 0,
          },
          {
            id: 133,
            responseKey: '3000000',
            label: {
              LabelFr: '3 millions',
              LabelEn: '3 million',
            },
            showOrder: 0,
          },
          {
            id: 134,
            responseKey: '4000000',
            label: {
              LabelFr: '4 millions',
              LabelEn: '4 million',
            },
            showOrder: 0,
          },
          {
            id: 135,
            responseKey: '5000000',
            label: {
              LabelFr: '5 millions',
              LabelEn: '5 million',
            },
            showOrder: 0,
          },
        ],
        identifier: 'Liability',
        defaultValue: '',
        unit: {
          LabelFr: '',
          LabelEn: '',
        },
        minLength: '',
        maxLength: '',
        mask: '',
      },
      {
        id: 2881,
        title: {
          LabelFr: "Chiffre d'affaires annuel",
          LabelEn: 'Annual revenue',
        },
        type: 'NUMBER',
        isRequired: true,
        responses: [],
        identifier: 'Revenue',
        defaultValue: '',
        unit: {
          LabelFr: '$',
          LabelEn: '$',
        },
        minLength: '',
        maxLength: '10000000',
        mask: '',
      },
      {
        id: 2882,
        title: {
          LabelFr: "Années d'expérience continue dans ce type d’activité",
          LabelEn: 'Number of years of experience',
        },
        type: 'NUMBER',
        isRequired: true,
        responses: [],
        identifier: 'YExperience',
        defaultValue: '',
        unit: {
          LabelFr: 'année(s)',
          LabelEn: 'year(s)',
        },
        minLength: '',
        maxLength: '99',
        mask: '',
      },
      {
        id: 2883,
        title: {
          LabelFr: 'Années en affaires',
          LabelEn: 'Number of years in business',
        },
        type: 'NUMBER',
        isRequired: true,
        responses: [],
        identifier: 'YBusiness',
        defaultValue: '',
        unit: {
          LabelFr: 'année(s)',
          LabelEn: 'year(s)',
        },
        minLength: '',
        maxLength: '99',
        mask: '',
      },
    ],
  };

  constructor() {}

  // getFlashFormDTO(marketId:string): Observable<FlashFormDTO> {
  //   return this.http.get<any>(`${environment.apiURL}/api/publicflash/` + marketId);
  // }

  getFlashquote(): Observable<FlashFormDTO> {
    return new Observable(subscriber => {
      subscriber.next(this.data)
    })
  }
}