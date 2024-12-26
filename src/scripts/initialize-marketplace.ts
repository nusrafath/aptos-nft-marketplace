import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { MARKETPLACE_ADDRESS, CONTRACT_NAME } from "@/config/constants";

async function initializeMarketplace() {
  try {
    const config = new AptosConfig({ network: Network.DEVNET });
    const aptos = new Aptos(config);

    const payload = {
      function: `${MARKETPLACE_ADDRESS}::${CONTRACT_NAME}::initialize`,
      type_arguments: [],
      arguments: [],
    };

    const response = await (window as any).aptos.signAndSubmitTransaction(
      payload
    );
    await aptos.waitForTransaction({ transactionHash: response.hash });

    console.log("Marketplace initialized successfully!");
  } catch (error) {
    // Initialization is optional, so we can ignore errors
    console.log("Marketplace initialization skipped:", error);
  }
}

export default initializeMarketplace;
