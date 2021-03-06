// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iaGC8N7icN64RQS5kdk5ev
// Component: iSjyu56io1
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import AlertInfoBox from "../../AlertInfoBox"; // plasmic-import: ejg9ScpLaN/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fire_spot.module.css"; // plasmic-import: iaGC8N7icN64RQS5kdk5ev/projectcss
import * as sty from "./PlasmicAlert.module.css"; // plasmic-import: iSjyu56io1/css

import Vector4Icon from "./icons/PlasmicIcon__Vector4"; // plasmic-import: qXJme5p6SBx/icon

export type PlasmicAlert__VariantMembers = {};

export type PlasmicAlert__VariantsArgs = {};
type VariantPropType = keyof PlasmicAlert__VariantsArgs;
export const PlasmicAlert__VariantProps = new Array<VariantPropType>();

export type PlasmicAlert__ArgsType = {};
type ArgPropType = keyof PlasmicAlert__ArgsType;
export const PlasmicAlert__ArgProps = new Array<ArgPropType>();

export type PlasmicAlert__OverridesType = {
  root?: p.Flex<"div">;
  alertInfoBox?: p.Flex<typeof AlertInfoBox>;
};

export interface DefaultAlertProps {
  className?: string;
}

function PlasmicAlert__RenderFunc(props: {
  variants: PlasmicAlert__VariantsArgs;
  args: PlasmicAlert__ArgsType;
  overrides: PlasmicAlert__OverridesType;
  dataFetches?: PlasmicAlert__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <AlertInfoBox
        data-plasmic-name={"alertInfoBox"}
        data-plasmic-override={overrides.alertInfoBox}
        className={classNames("__wab_instance", sty.alertInfoBox)}
      />

      <Vector4Icon
        className={classNames(defaultcss.all, sty.svg__xzyfh)}
        role={"img"}
      />

      <Vector4Icon
        className={classNames(defaultcss.all, sty.svg__bPayl)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "alertInfoBox"],
  alertInfoBox: ["alertInfoBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  alertInfoBox: typeof AlertInfoBox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAlert__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAlert__VariantsArgs;
    args?: PlasmicAlert__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAlert__Fetches;
  } & Omit<PlasmicAlert__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAlert__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAlert__ArgProps,
      internalVariantPropNames: PlasmicAlert__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAlert__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlert";
  } else {
    func.displayName = `PlasmicAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicAlert = Object.assign(
  // Top-level PlasmicAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    alertInfoBox: makeNodeComponent("alertInfoBox"),

    // Metadata about props expected for PlasmicAlert
    internalVariantProps: PlasmicAlert__VariantProps,
    internalArgProps: PlasmicAlert__ArgProps
  }
);

export default PlasmicAlert;
/* prettier-ignore-end */
