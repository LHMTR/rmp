import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    Badge,
    Tooltip,
    ModalFooter,
    Button,
} from '@chakra-ui/react';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';
import { StationType } from '../../constants/stations';
import { LineStyleType } from '../../constants/lines';
import { useRootSelector, useRootDispatch } from '../../redux';
import { setRefreshNodes, setRefreshEdges } from '../../redux/runtime/runtime-slice';
import { saveGraph } from '../../redux/param/param-slice';
import stations from '../svgs/stations/stations';
import { changeStationsTypeInBatch } from '../../util/change-types';
import ColourModal from '../panels/colour-modal/colour-modal';
import ThemeButton from '../panels/theme-button';

export const TranslateNodesModal = (props: { isOpen: boolean; onClose: () => void }) => {
    const { isOpen, onClose } = props;
    const dispatch = useRootDispatch();
    const { t } = useTranslation();
    const graph = React.useRef(window.graph);

    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);
    const fields: RmgFieldsField[] = [
        {
            type: 'input',
            label: t('header.settings.procedures.translate.x'),
            value: x.toString(),
            variant: 'number',
            onChange: val => setX(Number(val)),
            minW: 'full',
        },
        {
            type: 'input',
            label: t('header.settings.procedures.translate.y'),
            value: y.toString(),
            variant: 'number',
            onChange: val => setY(Number(val)),
            minW: 'full',
        },
    ];

    const handleChange = () => {
        graph.current.forEachNode((node, attr) => {
            graph.current.updateNodeAttribute(node, 'x', val => (val ?? 0) + x);
            graph.current.updateNodeAttribute(node, 'y', val => (val ?? 0) + y);
        });
        dispatch(setRefreshNodes());
        dispatch(setRefreshEdges());
        dispatch(saveGraph(graph.current.export()));
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('header.settings.procedures.translate.title')}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    {t('header.settings.procedures.translate.content')}
                    <RmgFields fields={fields} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" variant="outline" mr="1" onClick={onClose}>
                        {t('cancel')}
                    </Button>
                    <Button colorScheme="red" onClick={handleChange}>
                        {t('apply')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const ScaleNodesModal = (props: { isOpen: boolean; onClose: () => void }) => {
    const { isOpen, onClose } = props;
    const dispatch = useRootDispatch();
    const { t } = useTranslation();
    const graph = React.useRef(window.graph);

    const [scale, setScale] = React.useState(1);
    const fields: RmgFieldsField[] = [
        {
            type: 'input',
            label: t('header.settings.procedures.scale.factor'),
            value: scale.toString(),
            variant: 'number',
            onChange: val => setScale(Number(val)),
            minW: 'full',
        },
    ];

    const handleChange = () => {
        graph.current.forEachNode((node, attr) => {
            graph.current.updateNodeAttribute(node, 'x', val => (val ?? 0) * scale);
            graph.current.updateNodeAttribute(node, 'y', val => (val ?? 0) * scale);
        });
        dispatch(setRefreshNodes());
        dispatch(setRefreshEdges());
        dispatch(saveGraph(graph.current.export()));
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('header.settings.procedures.scale.title')}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    {t('header.settings.procedures.scale.content')}
                    <RmgFields fields={fields} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" variant="outline" mr="1" onClick={onClose}>
                        {t('cancel')}
                    </Button>
                    <Button colorScheme="red" onClick={handleChange}>
                        {t('apply')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const ChangeTypeModal = (props: { isOpen: boolean; onClose: () => void }) => {
    const { isOpen, onClose } = props;
    const dispatch = useRootDispatch();
    const { t } = useTranslation();
    const graph = React.useRef(window.graph);

    const availableStationOptions = Object.fromEntries(
        Object.entries(stations).map(([key, val]) => [key, t(val.metadata.displayName).toString()])
    ) as { [k in StationType]: string };
    const [oldStnType, setOldStnType] = React.useState(Object.keys(stations).at(0)! as StationType);
    const [newStnType, setNewStnType] = React.useState(Object.keys(stations).at(1)! as StationType);

    const fields: RmgFieldsField[] = [
        {
            type: 'select',
            label: t('header.settings.procedures.changeType.changeFrom'),
            value: oldStnType as StationType,
            options: availableStationOptions,
            disabledOptions: [newStnType],
            onChange: (val: string | number) => setOldStnType(val as StationType),
            minW: 'full',
        },
        {
            type: 'select',
            label: t('header.settings.procedures.changeType.changeTo'),
            value: newStnType as StationType,
            options: availableStationOptions,
            disabledOptions: [oldStnType],
            onChange: (val: string | number) => setNewStnType(val as StationType),
            minW: 'full',
        },
    ];

    const handleChange = () => {
        changeStationsTypeInBatch(graph.current, oldStnType, newStnType);
        dispatch(setRefreshNodes());
        dispatch(saveGraph(graph.current.export()));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text as="b" fontSize="xl">
                        {t('header.settings.procedures.changeType.title')}
                    </Text>
                    <Tooltip label={t('header.settings.pro')}>
                        <Badge ml="1" color="gray.50" background="radial-gradient(circle, #3f5efb, #fc466b)">
                            PRO
                        </Badge>
                    </Tooltip>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <RmgFields fields={fields} />
                    <Text fontSize="sm" mt="3" lineHeight="100%" color="red.500">
                        {t('header.settings.procedures.changeType.info')}
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" variant="outline" mr="1" onClick={onClose}>
                        {t('cancel')}
                    </Button>
                    <Button colorScheme="red" onClick={handleChange}>
                        {t('apply')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export const RemoveLinesWithSingleColorModal = (props: { isOpen: boolean; onClose: () => void }) => {
    const { isOpen, onClose } = props;
    const dispatch = useRootDispatch();
    const { theme: runtimeTheme } = useRootSelector(state => state.runtime);
    const { t } = useTranslation();
    const graph = React.useRef(window.graph);

    const [theme, setTheme] = React.useState(runtimeTheme);
    const [isColourModalOpen, setIsColourModalOpen] = React.useState(false);

    const handleChange = () => {
        graph.current
            .filterEdges(
                (edge, attr, source, target, sourceAttr, targetAttr, undirected) =>
                    attr.style === LineStyleType.SingleColor &&
                    JSON.stringify(attr[LineStyleType.SingleColor]!.color) === JSON.stringify(theme)
            )
            .forEach(edge => graph.current.dropEdge(edge));
        dispatch(setRefreshEdges());
        dispatch(saveGraph(graph.current.export()));
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('header.settings.procedures.removeLines.title')}</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    {t('header.settings.procedures.removeLines.content')}
                    <ThemeButton theme={theme} onClick={() => setIsColourModalOpen(true)} />
                    <ColourModal
                        isOpen={isColourModalOpen}
                        defaultTheme={theme}
                        onClose={() => setIsColourModalOpen(false)}
                        onUpdate={nextTheme => setTheme(nextTheme)}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" variant="outline" mr="1" onClick={onClose}>
                        {t('cancel')}
                    </Button>
                    <Button colorScheme="red" onClick={handleChange}>
                        {t('remove')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};