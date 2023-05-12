const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

async function main() {
    const credential = new DefaultAzureCredential();
    const keyVaultName = "kk-testSecrets";
    const url = "https://"+ keyVaultName + ".vault.azure.net";

    const client = new SecretClient(url, credential);

    const secretName = "NEXT-PUBLIC-SUPABASE-KEY";
    const result = await client.setSecret(secretName, "SECRET_VALUE");
    console.log("result: ", result);
    //Read the secret we created
    const secret = await client.getSecret(secretName);
    console.log("secret: ", secret);

    //Update the secret with different attributes
    const updatedSecret = await client.updateSecretProperties(secretName, result.properites.version, {
        enable: false
    });
    console.log("updated secret: ", updatedSecret);


}

main().catch((error)=> {
    console.error("An error occured: ", error);
    process.exit(1);
})