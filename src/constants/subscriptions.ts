import { AgentSubscription, AgentSubscriptionPackage } from '@/__generated__/types';

export const isProOrAdvanceSubscription = (subscriptionByPackages?: AgentSubscription | null) => {
  return (
    (subscriptionByPackages &&
      subscriptionByPackages.package &&
      [
        AgentSubscriptionPackage.BuyerPro,
        AgentSubscriptionPackage.BuyerAdvanced,
        AgentSubscriptionPackage.BuyerAdvancedTrial,
      ].includes(subscriptionByPackages.package)) ??
    false
  );
};

export const hasAgentSubscriptionByPackages = (
  packages: AgentSubscriptionPackage[],
  agentSubscriptions?: (AgentSubscription | null)[] | null,
) => {
  const subscription = agentSubscriptions?.find((subscription) => {
    return subscription && subscription.package && packages.includes(subscription?.package);
  });
  return !!subscription;
};

export const hasBuyerBasicSubscription = (
  agentSubscriptions?: (AgentSubscription | null)[] | null,
) => {
  return hasAgentSubscriptionByPackages(
    [AgentSubscriptionPackage.Buyer, AgentSubscriptionPackage.BuyerBasic],
    agentSubscriptions,
  );
};

export const hasDealsModuleSubscription = (
  agentSubscriptions?: (AgentSubscription | null)[] | null,
) => {
  return hasAgentSubscriptionByPackages(
    [
      AgentSubscriptionPackage.BuyerAdvanced,
      AgentSubscriptionPackage.BuyerAdvancedAddOn,
      AgentSubscriptionPackage.BuyerAdvancedTrial,
    ],
    agentSubscriptions,
  );
};

export const hasOnlyBuyerBasicSubscription = (
  agentSubscriptions?: (AgentSubscription | null)[] | null,
) => {
  return hasAgentSubscriptionByPackages([AgentSubscriptionPackage.BuyerBasic], agentSubscriptions);
};
