import { Flex, Typography } from 'antd';

import { CustomAlert } from '@/components/Alert';
import { DepositForBridging } from '@/components/bridge/DepositForBridging';
import { CardFlex } from '@/components/styled/CardFlex';
import { CardSection } from '@/components/styled/CardSection';
import { SetupScreen } from '@/enums/SetupScreen';
import { CrossChainTransferDetails } from '@/types/Bridge';

import { SetupCreateHeader } from '../SetupCreateHeader';

const { Text, Title } = Typography;

const FROM_CHAIN_NAME = 'Ethereum';

type BridgeOnEvmProps = {
  onNext: () => void;
  updateQuoteId: (quoteId: string) => void;
  updateCrossChainTransferDetails: (details: CrossChainTransferDetails) => void;
};

export const BridgeOnEvm = ({
  onNext,
  updateQuoteId,
  updateCrossChainTransferDetails,
}: BridgeOnEvmProps) => {
  return (
    <CardFlex $noBorder>
      <SetupCreateHeader prev={SetupScreen.SetupEoaFunding} />

      <CardSection vertical gap={24} className="m-0 pt-24">
        <Flex vertical gap={8}>
          <Title level={3} className="m-0">
            Bridge from {FROM_CHAIN_NAME}
          </Title>
          <Text className="text-base text-lighter">
            The bridged amount covers all funds required to create your account
            and run your agent, including fees. No further funds will be needed.
          </Text>
        </Flex>

        <CardSection>
          <CustomAlert
            fullWidth
            type="warning"
            showIcon
            message={
              <Flex vertical gap={5}>
                <Text strong>Only send funds on Ethereum!</Text>
                <Text>
                  Full amount of funds is required to initiate the bridging.
                </Text>
              </Flex>
            }
          />
        </CardSection>

        <DepositForBridging
          chainName={FROM_CHAIN_NAME}
          updateQuoteId={updateQuoteId}
          updateCrossChainTransferDetails={updateCrossChainTransferDetails}
          onNext={onNext}
        />
      </CardSection>
    </CardFlex>
  );
};
