module.exports = ({ wallets, refs, config, client }) => ({
  getPets: () => client.query("clicker", { get_pets: {} }),
  getScores: () => client.query("clicker", { get_scores: {} }),
  upsertScore: (score, signer = wallets.validator) => client.execute(signer, "clicker", { upsert_score: { score } }),
});
